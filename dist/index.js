"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const logger = require("koa-logger");
const json = require("koa-json");
const bodyParser = require("koa-bodyparser");
require("reflect-metadata");
const routes_1 = require("./routes");
const app = new Koa();
// Middlewares
app.use(json());
app.use(logger());
app.use(bodyParser());
// Routes
app.use(routes_1.default.routes());
app.listen(3000, () => {
    console.log("Koa started");
});
