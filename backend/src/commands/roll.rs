use anyhow::Result;
use axum::http::StatusCode;
use rand::Rng;

use crate::{DiscordPayload, DiscordResponse, DiscordResponseData};

pub async fn run(body: &DiscordPayload) -> Result<(DiscordResponse, StatusCode)> {
    let data = body.data.as_ref().unwrap();

    let mut max = 100;

    if data.options.is_some() {
        let options = data.options.as_ref().unwrap();
        max = match options.iter().find(|x| x.name == "max") {
            Some(x) => x.value.as_ref().unwrap().as_u64().unwrap(),
            None => 100,
        };
    }

    // generate a random number between 1 and max
    let roll = rand::thread_rng().gen_range(1..=max);
    let username = match &body.member {
        Some(member) => match member.user.as_ref() {
            Some(user) => &user.id,
            None => "",
        },
        None => "",
    };
    let res = DiscordResponse {
        r#type: 4,
        data: DiscordResponseData {
            content: format!("🎲 <@{}> {}", username, roll),
            flags: 0,
            tts: false,
            embeds: None,
        },
    };
    Ok((res, StatusCode::OK))
}
