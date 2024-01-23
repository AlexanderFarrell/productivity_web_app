import fs from "fs";

export function load_config() {
    console.log("Loading config");
    const data = fs.readFileSync(
        "server.config.json",
        {encoding: "utf-8"})
    return JSON.parse(data)
}