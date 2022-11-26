use anyhow::Result;
use axum::http::StatusCode;
use axum::response::IntoResponse;
use axum::routing::post;
use axum::Json;
use axum::{routing::get, Router};
use ed25519_dalek::{Signature, Verifier};
use http::header::CONTENT_TYPE;
use http::{HeaderMap, Request};
use hyper::Body;
use serde::{Deserialize, Serialize};
use tower_http::trace::TraceLayer;
pub mod commands;
pub mod responses;

/// Verify an ed25519 signature
/// used for validating discord webhooks
fn verify_key(
    body: String,
    signature: String,
    timestamp: String,
    public_key: String,
) -> Result<bool> {
    let sig_data = hex::decode(signature)?;
    let public_key_data = hex::decode(public_key)?;
    let signature = Signature::from_bytes(&sig_data)?;
    let public_key = ed25519_dalek::PublicKey::from_bytes(&public_key_data)?;
    let timestamp_data = timestamp.as_bytes();
    let body_data = body.as_bytes();
    let message = [timestamp_data, body_data].concat();
    Ok(public_key.verify(&message, &signature).is_ok())
}
async fn ping() -> impl IntoResponse {
    "pong"
}
#[derive(Debug, Serialize, Deserialize)]
struct DiscordOption {
    name: String,
    r#type: u8,
    value: Option<serde_json::Value>,
    options: Option<Vec<DiscordOption>>,
}
#[derive(Debug, Serialize, Deserialize)]
struct DiscordData {
    id: String,
    name: String,
    r#type: u64,
    options: Option<Vec<DiscordOption>>,
}
#[derive(Debug, Serialize, Deserialize)]
struct DiscordUser {
    avatar: Option<String>,
    avatar_decoration: Option<String>,
    discriminator: String,
    id: String,
    public_flags: u64,
    username: String,
}

enum Command {
    Roster,
    AddChar,
    Roll,
}
impl Command {
    fn from_id_str(s: &str) -> Option<Command> {
        match s {
            "1044441548277948436" => Some(Command::Roster),
            "1044740904235319377" => Some(Command::AddChar),
            "1045885525703270460" => Some(Command::Roll),
            _ => None,
        }
    }
}
#[derive(Debug, Serialize, Deserialize)]
pub struct DiscordMember {
    roles: Vec<String>,
    user: Option<DiscordUser>,
}
#[derive(Debug, Serialize, Deserialize)]
pub struct DiscordPayload {
    application_id: String,
    channel_id: Option<String>,
    /// The data of the incoming integration command
    data: Option<DiscordData>,
    guild_id: Option<String>,
    user: Option<DiscordUser>,
    member: Option<DiscordMember>,
    r#type: u64,
}

#[derive(Debug, Serialize, Deserialize)]
struct DiscordResponseData {
    content: String,
    flags: u64,
    tts: bool,
    embeds: Option<Vec<serde_json::Value>>,
}
#[derive(Debug, Serialize, Deserialize)]
pub struct DiscordResponse {
    r#type: u64,
    data: DiscordResponseData,
}
async fn integration(
    Json(body): Json<serde_json::Value>,
    headers: HeaderMap,
) -> Result<impl IntoResponse, StatusCode> {
    let signature = match headers.get("x-signature-ed25519") {
        Some(signature) => signature.to_str().unwrap(),
        None => {
            eprintln!("No signature");
            return Err(StatusCode::BAD_REQUEST);
        }
    };
    let timestamp = match headers.get("x-signature-timestamp") {
        Some(timestamp) => timestamp.to_str().unwrap(),
        None => {
            eprintln!("No timestamp");
            return Err(StatusCode::BAD_REQUEST);
        }
    };

    let body_str = match serde_json::to_string(&body) {
        Ok(body_str) => body_str,
        Err(_) => {
            eprintln!("Failed to serialize body");
            return Err(StatusCode::BAD_REQUEST);
        }
    };
    println!("timestamp: {}", timestamp);
    println!("signature: {}", signature);
    println!("Body: {}", body_str);
    let valid_req = match verify_key(
        body_str,
        signature.to_string(),
        timestamp.to_string(),
        "a5d1148be5d078b851d180a46134f24bceb1e6a02ff884c0c5bf2fc2ea85f408".to_string(),
    ) {
        Ok(valid) => valid,
        Err(e) => {
            eprintln!("Error verifying key: {}", e);
            return Err(StatusCode::BAD_REQUEST);
        }
    };

    if valid_req {
        let body = match serde_json::from_value::<DiscordPayload>(body) {
            Ok(body) => body,
            Err(e) => {
                eprintln!("Error parsing body to DiscordPayload struct: {}", e);
                return Err(StatusCode::BAD_REQUEST);
            }
        };

        match body.r#type {
            1 => {
                println!("Received ping");
                let (res, status) = commands::ping(&body).await.unwrap();
                let mut headers = HeaderMap::new();
                headers.insert("content-type", "application/json".parse().unwrap());
                return Ok((status, headers, Json(res)));
            }
            2 => {
                println!("Received command");
                let int_data = match &body.data {
                    Some(data) => data,
                    None => {
                        eprintln!("No data");
                        return Err(StatusCode::BAD_REQUEST);
                    }
                };
                if let Some(command) = Command::from_id_str(&int_data.id) {
                    match command {
                        Command::Roster => {
                            let (res, status) = commands::roster::run(&body).await.unwrap();
                            let mut headers = HeaderMap::new();
                            headers.insert(CONTENT_TYPE, "application/json".parse().unwrap());
                            Ok((status, headers, Json(res)))
                        }
                        Command::AddChar => {
                            let (res, status) = commands::addchar::run(&body).await.unwrap();
                            let mut headers = HeaderMap::new();
                            headers.insert(CONTENT_TYPE, "application/json".parse().unwrap());
                            Ok((status, headers, Json(res)))
                        }
                        Command::Roll => {
                            let (res, status) = commands::roll::run(&body).await.unwrap();
                            let mut headers = HeaderMap::new();
                            headers.insert(CONTENT_TYPE, "application/json".parse().unwrap());
                            Ok((status, headers, Json(res)))
                        }
                    }
                } else {
                    eprintln!("Unknown command: {}", int_data.id);
                    Err(StatusCode::BAD_REQUEST)
                }
            }
            _ => Err(StatusCode::BAD_REQUEST),
        }
    } else {
        eprintln!("Signature failed validation");
        Err(StatusCode::UNAUTHORIZED)
    }
}
#[tokio::main]
async fn main() {
    tracing_subscriber::fmt()
        // .with_ansi(false)
        .without_time()
        .with_max_level(tracing::Level::INFO)
        .init();

    // Trace every request
    let trace_layer =
        TraceLayer::new_for_http().on_request(|req: &Request<Body>, _: &tracing::Span| {
            let method = req.method();
            let url = req.uri().path();
            let msg = format!("{}  {}", method, url);
            tracing::info!(message = msg);
        });
    // Wrap an `axum::Router` with our state, CORS, Tracing, & Compression layers
    let app = Router::new()
        .route("/api/ping", get(ping))
        .route("/api/integration", post(integration))
        .layer(trace_layer);

    #[cfg(debug_assertions)]
    {
        dotenv::dotenv().ok();
        let addr = std::net::SocketAddr::from(([127, 0, 0, 1], 3000));
        axum::Server::bind(&addr)
            .serve(app.into_make_service())
            .await
            .unwrap();
    }

    // If we compile in release mode, use the Lambda Runtime
    #[cfg(not(debug_assertions))]
    {
        // To run with AWS Lambda runtime, wrap in our `LambdaLayer`
        let app = tower::ServiceBuilder::new()
            .layer(axum_aws_lambda::LambdaLayer::default())
            .service(app);

        lambda_http::run(app).await.unwrap();
    }
}
