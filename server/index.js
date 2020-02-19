import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import dotenv from 'dotenv';

const env = dotenv.config();
const app = new Koa();
const router = new Router();

app.use(logger());

router.get('/', (ctx, next) => {
	ctx.body = 'Hello Worsld!';
});

app.use(router.routes());
app.use(router.allowedMethods());
const server = app.listen(process.env.HOST);

console.log(`Listening at port: ${process.env.HOST}`);

export { server };