import express from "express";
import {load_config} from "./config.js";
import {database_init} from "./database.js";
import morgan from "morgan";

export function app_create() {
    const app = express()
    app.set("config", load_config())
    app.set("view engine", "ejs")
    app.set("views", "client/views")
    app.use(express.json())
    app.use(morgan('tiny'))
    app.use(express.urlencoded({extended: false}))
    app.use(express.static('client/public'))
    database_init(app.get("config"));

    return app;
}

export function app_run(app) {
    const config = app.get("config")
    app.listen(config.port, () => {
        console.log(`Server is listening at http://localhost:${config.port}`)
    })
}
