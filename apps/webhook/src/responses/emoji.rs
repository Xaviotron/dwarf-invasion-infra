use serde::{Deserialize, Serialize};
use serde_json::Value;

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Emoji {
    pub name: String,
    pub roles: Vec<Value>,
    pub id: String,
    #[serde(rename = "require_colons")]
    pub require_colons: bool,
    pub managed: bool,
    pub animated: bool,
    pub available: bool,
    pub user: User,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct User {
    pub id: String,
    pub username: String,
    pub avatar: String,
    #[serde(rename = "avatar_decoration")]
    pub avatar_decoration: Value,
    pub discriminator: String,
    #[serde(rename = "public_flags")]
    pub public_flags: i64,
}