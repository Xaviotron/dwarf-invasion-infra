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
	const charProfilesReq = await Promise.all(
		roster.map((rosterItem) => {
			const url = `${RAIDBOTS_WOW_API_BASE_URL}/character/${WOW_REGION}/${REALM_SLUG}/${rosterItem.character_name}`;
			return fetch(url);
		})
	);
	const userProfiles: Character[] = await Promise.all(
		charProfilesReq.map((res) => res.json())
	);
	console.log("Got wow character profiles");

	console.log("Creating sim requests...");
	const reportsReq = await Promise.all(
		userProfiles.map((userProfile) => {
			const simRes = fetch(`${RAIDBOTS_BASE_URL}/sim`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(
					requestBody(userProfile.name, userProfile)
				),
			});
			return simRes;
		})
	);
	const reports: SimResponse[] = await Promise.all(
		reportsReq.map((res) => res.json())
	);
	console.log("Got all sim reports data");

	const now = new Date();
	const timestamp = Math.floor(now.getTime() / 1000);
	const schedulerName = `dwarf-invasion-sim-${timestamp}`;
	// TODO CHANGE TO 1 HOUR
	const scheduleDelay = 300;
	const scheduleDate = new Date((timestamp + scheduleDelay) * 1000);

	const AWS_REGION = process.env.AWS_REGION;
	const schedulerClient = new SchedulerClient({ region: AWS_REGION });
	const schedule = new CreateScheduleCommand({
		Name: schedulerName,
		ScheduleExpression: `at(${scheduleDate.toISOString().split(".")[0]})`,
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
	await schedulerClient.send(schedule);
	console.log("Created event rule");
};
