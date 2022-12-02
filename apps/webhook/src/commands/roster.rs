use crate::responses::emoji::Emoji;
use crate::{DiscordPayload, DiscordResponse, DiscordResponseData};
use anyhow::Result;
use axum::http::StatusCode;
use std::env;

use super::addchar::RosterItem;

fn format_user<S: Into<String>>(emoji: S, name: &String) -> String {
    format!("\t{} - **{}**\n\n", emoji.into(), name)
}
pub async fn run(_body: &DiscordPayload) -> Result<(DiscordResponse, StatusCode)> {
    let bucket_name = env::var("BUCKET_NAME").unwrap();
    let guild_id = env::var("DISCORD_GUILD_ID").expect("DISCORD_GUILD_ID must be set");
    let bot_token = env::var("DISCORD_BOT_TOKEN").expect("DISCORD_BOT_TOKEN must be set");

    let config = aws_config::load_from_env().await;
    let client = aws_sdk_s3::Client::new(&config);
    let mut message = String::new();

    let url = format!("https://discord.com/api/guilds/{}/emojis", guild_id);

    let roster_fut = client
        .get_object()
        .bucket(&bucket_name)
        .key("roster.json")
        .send();

    let classes_fut = client
        .get_object()
        .bucket(&bucket_name)
        .key("classes.json")
        .send();
    let emojis_fut = reqwest::Client::new()
        .get(&url)
        .header("Authorization", format!("Bot {}", bot_token))
        .send();

    let (roster_res, classes_res, emojis_res) = futures::join!(roster_fut, classes_fut, emojis_fut);

    let roster_res = match roster_res {
        Ok(content) => content,

        Err(e) => {
            eprintln!("Failed to fetch roster info: {}", e);
            return Ok((
                DiscordResponse {
                    data: DiscordResponseData {
                        content: "Failed to fetch roster info from the s3 bucket".to_string(),
                        flags: 0,
                        tts: false,
                        embeds: None,
                    },
                    r#type: 4,
                },
                StatusCode::OK,
            ));
        }
    };

    let classes_res = match classes_res {
        Ok(res) => res,
        Err(e) => {
            eprintln!("Failed to fetch class info: {}", e);
            return Ok((
                DiscordResponse {
                    data: DiscordResponseData {
                        content: "Failed to fetch class info from the s3 bucket".to_string(),
                        flags: 0,
                        tts: false,
                        embeds: None,
                    },
                    r#type: 4,
                },
                StatusCode::OK,
            ));
        }
    };
    let emojis_res = match emojis_res {
        Ok(res) => res,
        Err(e) => {
            eprintln!("Failed to fetch emojis: {}", e);
            return Ok((
                DiscordResponse {
                    data: DiscordResponseData {
                        content: "Failed to fetch emojis from the Discord api".to_string(),
                        flags: 0,
                        tts: false,
                        embeds: None,
                    },
                    r#type: 4,
                },
                StatusCode::OK,
            ));
        }
    };
    let emojis = match emojis_res.json::<Vec<Emoji>>().await {
        Ok(emojis) => emojis,
        Err(e) => {
            eprintln!("Failed to deserialize emojis: {}", e);
            return Ok((
                DiscordResponse {
                    data: DiscordResponseData {
                        content: "Failed to deserialize emojis from the Discord api".to_string(),
                        flags: 0,
                        tts: false,
                        embeds: None,
                    },
                    r#type: 4,
                },
                StatusCode::OK,
            ));
        }
    };
    let roster_bytes = match roster_res.body.collect().await {
        Ok(bytes) => bytes,
        Err(e) => {
            eprintln!("Failed to read roster ByteStream: {}", e);
            return Ok((
                DiscordResponse {
                    data: DiscordResponseData {
                        content: "Failed to read roster ByteStream".to_string(),
                        flags: 0,
                        tts: false,
                        embeds: None,
                    },
                    r#type: 4,
                },
                StatusCode::OK,
            ));
        }
    }
    .into_bytes();
    let classes_bytes = match classes_res.body.collect().await {
        Ok(bytes) => bytes,
        Err(e) => {
            eprintln!("Failed to read classes ByteStream: {}", e);
            return Ok((
                DiscordResponse {
                    data: DiscordResponseData {
                        content: "Failed to read classes ByteStream".to_string(),
                        flags: 0,
                        tts: false,
                        embeds: None,
                    },
                    r#type: 4,
                },
                StatusCode::OK,
            ));
        }
    }
    .into_bytes();

    let roster: Vec<RosterItem> = serde_json::from_slice(&roster_bytes).unwrap();
    let class_info: serde_json::Value = serde_json::from_slice(&classes_bytes).unwrap();
    let class_info = class_info.as_object().unwrap();
    let mut tanks = Vec::new();
    let mut healers = Vec::new();
    let mut dps = Vec::new();

    let roster = roster.iter().filter(|r| !r.alt);

    for member in roster {
        let role = class_info["classes"][&member.class][&member.spec]["role"]
            .as_str()
            .unwrap();
        match role {
            "tank" => tanks.push(member),
            "healer" => healers.push(member),
            _ => dps.push(member),
        }
    }

    let tank_banner = format!("**TANKS**\t({})\n\n", tanks.len());
    message.push_str(&tank_banner);
    for tank in tanks {
        let emoji_name = format!("{}_{}", tank.class, tank.spec);
        let emoji_id = match emojis.iter().find(|e| e.name == emoji_name) {
            Some(emoji) => emoji.id.clone(),
            None => "❓".to_string(),
        };
        let emoji_str = format!("<:{}:{}>", emoji_name, emoji_id);
        message.push_str(&format_user(emoji_str, &tank.character_name));
    }
    let healer_banner = format!("**HEALERS**\t({})\n\n", &healers.len());
    message.push_str(&healer_banner);
    for healer in healers {
        let emoji_name = format!("{}_{}", healer.class, healer.spec);
        let emoji_id = match emojis.iter().find(|e| e.name == emoji_name) {
            Some(emoji) => emoji.id.clone(),
            None => "❓".to_string(),
        };
        let emoji_str = format!("<:{}:{}>", emoji_name, emoji_id);
        message.push_str(&format_user(emoji_str, &healer.character_name));
    }
    let dps_banner = format!("**DPS\t**({})\n\n", &dps.len());
    message.push_str(&dps_banner);
    for dealer in dps {
        let emoji_name = format!("{}_{}", dealer.class, dealer.spec);
        let emoji_id = match emojis.iter().find(|e| e.name == emoji_name) {
            Some(emoji) => emoji.id.clone(),
            None => "❓".to_string(),
        };
        let emoji_str = format!("<:{}:{}>", emoji_name, emoji_id);
        message.push_str(&format_user(emoji_str, &dealer.character_name));
    }

    let res = DiscordResponse {
        r#type: 4,
        data: DiscordResponseData {
            content: message,
            flags: 0,
            tts: false,
            embeds: None,
        },
    };
    Ok((res, StatusCode::OK))
}