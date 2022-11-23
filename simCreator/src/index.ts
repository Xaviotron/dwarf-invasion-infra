import fetch from "node-fetch";
import { Character } from "./types/character";
import { RosterItem } from "./types/roster";
import { EventBridgeClient, PutRuleCommand } from "@aws-sdk/client-eventbridge";
import { requestBody } from "./requests/sim";
import { SimResponse } from "./types/sim";

const LAMBDA_ARN = process.env.SIM_AGGREGATOR_ARN;
const RAIDBOTS_BASE_URL = "https://www.raidbots.com";
const RAIDBOTS_WOW_API_BASE_URL = `${RAIDBOTS_BASE_URL}/api/wowapi`;
const REALM_SLUG = "zuljin";
const WOW_REGION = "us";

export const handler = async () => {
    const ROSTER_URL = process.env.ROSTER_URL!;
    console.log("Fetching roster...");
    const rosterRes = await fetch(ROSTER_URL);
    const rosterData = await rosterRes.json() as RosterItem[];
    console.log("Roster fetched.");

    console.log("Fetching characters...");
    const char_profiles_req = await Promise.all(rosterData.map((rosterItem) => {
        const url = `${RAIDBOTS_WOW_API_BASE_URL}/character/${WOW_REGION}/${REALM_SLUG}/${rosterItem.character_name}`;
        return fetch(url);
    }));
    const user_profiles: Character[] = await Promise.all(char_profiles_req.map((res) => res.json()));
    console.log("Got wow character profiles");
    
    console.log("Creating sim requests...");
    const reports_req = await Promise.all(user_profiles.map((user_profile) => {
        const simRes = fetch(`${RAIDBOTS_BASE_URL}/simc`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody(user_profile.name, user_profile))
        });
        return simRes;
    }));
    const reports: SimResponse[] = await Promise.all(reports_req.map((res) => res.json()));
    console.log("Got all sim reports data");

    const now = new Date();
    const rule_name = `dwarf-invasion-sim-${now.toISOString()}`;

    const AWS_REGION = process.env.AWS_REGION;
    const ebClient = new EventBridgeClient({ region: AWS_REGION });
    const putEvent = new PutRuleCommand({
        Name: rule_name,
        State: "ENABLED",
        RoleArn: process.env.EVENT_ROLE_ARN!,
        EventPattern: JSON.stringify({
            source: ["aws.events"],
            resources: [LAMBDA_ARN],
            detail: {
                reports
            },
        }),
        // in the next hour
        ScheduleExpression: `at(${now.toISOString()})`,
    });
    console.log("Creating schedule for lambda aggregator...");
    await ebClient.send(putEvent);
    console.log("Created event rule");
}
