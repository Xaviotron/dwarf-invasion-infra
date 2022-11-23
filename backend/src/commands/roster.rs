use crate::{DiscordPayload, DiscordResponse, DiscordResponseData};
use anyhow::Result;
use axum::http::StatusCode;

use super::addchar::RosterItem;

pub async fn run(_body: &DiscordPayload) -> Result<(DiscordResponse, StatusCode)> {
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

    let roster: Vec<RosterItem> = serde_json::from_slice(&bytes).unwrap();
    let mut message = String::new();

    for item in roster {
        message.push_str(&format!(
            "[{}] - [{}]: **{}**\n\n",
            item.class, item.spec, item.character_name
        ));
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
