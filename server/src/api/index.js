import Router from 'koa-router';
const router = new Router();

router.get('/video', async (ctx) => {
	ctx.body = 'video';
});

router.get('/playlist', async (ctx) => {
	ctx.body = 'playlist';
});

export default router;