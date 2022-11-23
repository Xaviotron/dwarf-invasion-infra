use anyhow::Result;
use axum::http::StatusCode;
use serde::{Deserialize, Serialize};

use crate::{DiscordPayload, DiscordResponse, DiscordResponseData};

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
enum Class {
    Druid,
    Hunter,
    Mage,
    Paladin,
    Priest,
    Rogue,
    Shaman,
    Warlock,
    Warrior,
    Evoker,
    DeathKnight,
    DemonHunter,
}
#[derive(Debug, Serialize, Deserialize)]
pub struct RosterItem {
    pub class: String,
    pub spec: String,
    pub character_name: String,
    pub alt: bool,
}
pub async fn run(body: &DiscordPayload) -> Result<(DiscordResponse, StatusCode)> {
    let options = body.data.as_ref().unwrap().options.as_ref().unwrap();
    println!("Received roster command with options: {:?}", options);

    let command = &options.get(0).unwrap().clone();
    let command_options = command.options.as_ref().unwrap();

    let character_name = &command_options
        .iter()
        .find(|x| x.name == "character_name")
        .unwrap()
        .value
        .as_ref()
        .unwrap();

    let alt = &command_options
        .iter()
        .find(|x| x.name == "alt")
        .unwrap()
        .value
        .as_ref()
        .unwrap();

    let spec = &command_options
        .iter()
        .find(|x| x.name == "spec")
        .unwrap()
        .value
        .as_ref()
        .unwrap();

    let config = aws_config::load_from_env().await;
    let client = aws_sdk_s3::Client::new(&config);
    let content = client
        .get_object()
        .bucket("dwarf-invasion")
        .key("roster.json")
        .send()
        .await
        .unwrap();
    let bytes = content.body.collect().await.unwrap().into_bytes();
    let mut roster: Vec<RosterItem> = serde_json::from_slice(&bytes).unwrap();

    roster.push(RosterItem {
        class: command.clone().name.clone().as_str().to_string(),
        spec: spec.clone().as_str().unwrap().to_string(),
        character_name: character_name.clone().as_str().unwrap().to_string(),
        alt: alt.clone().as_bool().unwrap(),
    });

    match client
        .put_object()
        .bucket("dwarf-invasion")
        .key("roster.json")
        .body(serde_json::to_string(&roster).unwrap().into_bytes().into())
        .send()
        .await
    {
        Ok(_) => {
            let res = DiscordResponse {
                r#type: 4,
                data: DiscordResponseData {
                    content: "Character added to roster!".to_string(),
                    flags: 0,
                    tts: false,
                    embeds: None,
                },
            };
            println!("res: {:?}", res);
            return Ok((res, StatusCode::OK));
        }
        Err(e) => {
            let res = DiscordResponse {
                r#type: 4,
                data: DiscordResponseData {
                    content: format!("Error adding character to roster: {}", e),
                    flags: 0,
                    tts: false,
                    embeds: None,
                },
            };

            eprintln!("res: {:?}", res);
            return Ok((res, StatusCode::OK));
        }
    }
}
