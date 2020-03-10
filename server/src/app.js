import Koa from 'koa';
import logger from 'koa-logger';
import dotenv from 'dotenv';
import bodyParser from 'koa-bodyparser';

import errorHandler from './middleware/error.js';
import indexRoutes from './api/index.js';

const env = dotenv.config();
const app = new Koa();

app.use(logger());
app.use(errorHandler);
app.use(bodyParser());
app.use(indexRoutes.routes());
app.use(indexRoutes.allowedMethods());

const server = app.listen(process.env.HOST);

console.log(`Listening at port: ${process.env.HOST}`);

export { server };