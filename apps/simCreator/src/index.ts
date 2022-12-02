import fetch from "node-fetch";
import { Character } from "utils/types/character";
import { RosterItem } from "utils/types/roster";
import {
	SchedulerClient,
	CreateScheduleCommand,
} from "@aws-sdk/client-scheduler";
import { requestBody } from "./requests/sim";
import { SimResponse } from "utils/types/sim";

const LAMBDA_ARN = process.env.SIM_AGGREGATOR_ARN;
const RAIDBOTS_BASE_URL = "https://www.raidbots.com";
const RAIDBOTS_WOW_API_BASE_URL = `${RAIDBOTS_BASE_URL}/wowapi`;
const BUCKET_URL = process.env.BUCKET_URL!;
const CLASS_INFO_URL = `${BUCKET_URL}/classes.json`;
const REALM_SLUG = "zuljin";
const WOW_REGION = "us";

export const handler = async () => {
	const ROSTER_URL = process.env.ROSTER_URL!;
	console.log("Fetching roster...");
	const dataRes = [];
	dataRes.push(fetch(CLASS_INFO_URL));
	dataRes.push(fetch(ROSTER_URL));

	const data = await Promise.all(dataRes);
	const [classInfoData, rosterData] = (await Promise.all(
		data.map((res) => res.json())
	)) as [any, RosterItem[]];

	console.log("Roster fetched.");
	console.log("Fetching characters...");
	const roster = rosterData.filter(
		(player) =>
			classInfoData["classes"][player.class][player.spec].role === "dps"
	);
	const char_profiles_req = await Promise.all(
		roster.map((rosterItem) => {
			const url = `${RAIDBOTS_WOW_API_BASE_URL}/character/${WOW_REGION}/${REALM_SLUG}/${rosterItem.character_name}`;
			return fetch(url);
		})
	);
	const user_profiles: Character[] = await Promise.all(
		char_profiles_req.map((res) => res.json())
	);
	console.log("Got wow character profiles");

	console.log("Creating sim requests...");
	const reports_req = await Promise.all(
		user_profiles.map((user_profile) => {
			const simRes = fetch(`${RAIDBOTS_BASE_URL}/sim`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(
					requestBody(user_profile.name, user_profile)
				),
			});
			return simRes;
		})
	);
	const reports: SimResponse[] = await Promise.all(
		reports_req.map((res) => res.json())
	);
	console.log("Got all sim reports data");

	const now = new Date();
	const timestamp = Math.floor(now.getTime() / 1000);
	const scheduler_name = `dwarf-invasion-sim-${timestamp}`;
	// TODO CHANGE TO 1 HOUR
	const delay = 60;
	const sched_date = new Date((timestamp + delay) * 1000);

	const AWS_REGION = process.env.AWS_REGION;
	const schedClient = new SchedulerClient({ region: AWS_REGION });
	const sched = new CreateScheduleCommand({
		Name: scheduler_name,
		ScheduleExpression: `at(${sched_date.toISOString().split(".")[0]})`,
		Target: {
			Arn: LAMBDA_ARN,
			RoleArn: process.env.EVENT_ROLE_ARN!,
			Input: JSON.stringify(reports),
		},
		FlexibleTimeWindow: {
			Mode: "OFF",
		},
	});
	console.log("Creating schedule for lambda aggregator...");
	await schedClient.send(sched);
	console.log("Created event rule");
};
