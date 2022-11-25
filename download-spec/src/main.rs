use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::fs::File;
use std::io::{BufReader, Write};

#[derive(Debug, Serialize, Deserialize)]
struct ClassData {
    classes: HashMap<String, HashMap<String, SpecData>>,
}
#[derive(Debug, Serialize, Deserialize)]
struct SpecData {
    #[serde(flatten)]
    spec: HashMap<String, Spec>,
    color: String,
}
#[derive(Debug, Serialize, Deserialize)]
struct Spec {
    role: String,
    #[serde(rename = "URL")]
    url: String,
}
#[tokio::main]
async fn main() {
    let path = "/Users/lpturmel/Downloads/classes.json";
    let file = File::open(path).unwrap();

    let reader = BufReader::new(file);
    let data: serde_json::Value = serde_json::from_reader(reader).unwrap();

    let classes = data["classes"].as_object().unwrap().iter();
    println!("Processing: {} classes", classes.len());
    let mut spec_count = 0;
    for (class_name, spec_obj) in classes {
        let specs = spec_obj.as_object().unwrap().iter().filter(|(k, _)| {
            let k = k.as_str();
            k != "color"
        });
        for (spec, spec_data) in specs {
            let path = format!("./data/icons/{}_{}.jpg", class_name, spec);
            let url = spec_data["URL"].as_str().unwrap();
            println!("Downloading icon for {} to {}...", spec, path);

            let mut file = File::create(path).unwrap();
            let response = reqwest::get(url).await.unwrap();
            let mut content = response.bytes().await.unwrap();
            file.write_all(&mut content).unwrap();
            spec_count += 1;
        }
    }
    println!("Processed {} specs", spec_count);
    println!("Downloaded {} icons", spec_count);
}
