import * as Koa from "koa";
import * as cors from '@koa/cors';
import * as logger from "koa-logger";
import * as json from "koa-json";
import * as bodyParser from "koa-bodyparser";
import "reflect-metadata";

import routes from './routes';
import db from './db';

const app = new Koa();
app.use(cors());

// Middlewares
app.use(json());
app.use(logger());
app.use(bodyParser());

// Routes
app.use(routes.routes())

db().then( () => {
    console.log("Connected to database!")
    app.listen(8000, () => {
        console.log(`Koa running at PORT 8000`)
    });
})
