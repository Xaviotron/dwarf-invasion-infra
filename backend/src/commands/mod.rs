use anyhow::Result;
use axum::http::StatusCode;

use crate::{DiscordPayload, DiscordResponse, DiscordResponseData};

pub mod addchar;
pub mod roster;

pub async fn ping(_body: &DiscordPayload) -> Result<(DiscordResponse, StatusCode)> {
    let res = DiscordResponse {
        r#type: 1,
        data: DiscordResponseData {
            content: "pong".to_string(),
            flags: 0,
            tts: false,
            embeds: None,
        },
    };

    Ok((res, StatusCode::OK))
}
