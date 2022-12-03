import { SimResponse } from "utils/types/sim";
import { RosterItem } from "utils/types/roster";
import fetch from "node-fetch";
import { SimReport } from "utils/types/simReport";
import { Icon } from "utils/types/icon";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const DISCORD_WH_URL = process.env.DISCORD_WH_URL!;
const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID!;
const DISCORD_EMOJIS_URL =
  "https://discord.com/api/guilds/" + DISCORD_GUILD_ID + "/emojis";
const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN!;

const RAIDBOTS_REPORT_URL = "https://www.raidbots.com/simbot/report/";
const RAIDBOTS_SUFFIX = "/data.json";
const BUCKET_URL = process.env.BUCKET_URL;

export const handler = async (reports: SimResponse[]) => {
  const reportIdsUrls: string[] = [];

  const rosterReq = await fetch(BUCKET_URL + "/roster.json", {});
  const roster: RosterItem[] = await rosterReq.json();

  reports.forEach((report) => {
    if (!report.error) {
      reportIdsUrls.push(RAIDBOTS_REPORT_URL + report.simId + RAIDBOTS_SUFFIX);
    }
  });
  console.log("Fetching sims reports info...");
  const reports_info_req = await Promise.all(
    reportIdsUrls.map((reportUrl) => {
      const url = reportUrl;
      return fetch(url);
    })
  );
  const reportsData: SimReport[] = await Promise.all(
    reports_info_req.map((res) => res.json())
  );
  console.log("Got sims reports info");
  console.log("Posting to discord...");

  //fetch spec icons here:
  const iconsReq = await fetch(DISCORD_EMOJIS_URL, {
    headers: {
      Authorization: "Bot " + DISCORD_BOT_TOKEN,
    },
  });

  const icons: Icon[] = await iconsReq.json();

  let message: string = "";
  let emoji = "";

  const sorted = reportsData
    .map((report) => {
      const charName = report.simbot.meta.rawFormData.baseActorName;
      const spec = report.simbot.spec;

      emoji = "";

      roster.forEach((player) => {
        if (
          player.character_name?.toString().toLowerCase() ==
          charName?.toLowerCase()
        ) {
          icons.forEach((icon) => {
            if (
              icon.name.split("_")[1] == player.spec &&
              icon.name.split("_")[0] == player.class
            ) {
              emoji += "<:" + icon.name + ":" + icon.id + ">";
            }
          });
        }
      });

      const ilvl =
        report.simbot.meta.rawFormData.character.items.averageItemLevelEquipped;
      const mean = report.sim.players.find((sim) => sim.name === charName)
        ?.collected_data.dps.mean!;

      return {
        spec,
        emoji,
        charName,
        ilvl,
        mean: Math.round(mean),
      };
    })
    .sort((a, b) => b.mean - a.mean);
  sorted.forEach((char, i) => {
    const formatted = char.mean
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    message += `${i + 1}.\t${char.emoji} **${char.charName}** (ilvl ${
      char.ilvl
    }) simmed as ${char.spec}\n\t\`${formatted} dps\n\``;
  });
  const data = {
    content: message,
  };

  const discordPost = fetch(DISCORD_WH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  console.log("Storing sims history in s3...");

  const s3Client = new S3Client({
    region: process.env.AWS_REGION,
  });

  const now = new Date();
  const dateStr = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;

  const putCmd = new PutObjectCommand({
    Bucket: process.env.BUCKET_NAME!,
    Key: `sims/report-${dateStr}.json`,
    Body: JSON.stringify(sorted),
  });
  const s3Post = s3Client.send(putCmd);
  await Promise.all([discordPost, s3Post]);

  console.log("Posted to discord.");
  console.log("Saved sims to s3");
};
