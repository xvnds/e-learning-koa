import * as Koa from "koa";
import * as logger from "koa-logger";
import * as json from "koa-json";
import * as bodyParser from "koa-bodyparser";
import "reflect-metadata";

import routes from './routes';

const app = new Koa();

// Middlewares
app.use(json());
app.use(logger());
app.use(bodyParser());

// Routes
app.use(routes.routes())

app.listen(3000, () => {
    console.log("Koa started")
});