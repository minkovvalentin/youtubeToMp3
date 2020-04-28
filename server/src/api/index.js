import Router from 'koa-router';
const router = new Router();
import { createWriteStream } from 'fs';
import ytdl from 'ytdl-core';
import shell from 'shelljs';
import progress from 'progress-stream';

const downloadLocation = `./downloads/${'videos'}`
const str = progress({
	time: 100
});

function createDir(dir) {
	shell.mkdir('-p', dir);
}

router.get('/video', async (ctx) => {
	ctx.body = 'video';
});

router.post('/video', async (ctx) => {

	console.log(ctx.request.query.url);
	ytdl(ctx.request.query.url)
		.on('error', (error) => console.log(error))
		.on('info', (info) => {
			let videoTitle = info.title;
			createDir(downloadLocation),
				ytdl(ctx.request.query.url, { quality: 'highestaudio', filter: 'audioonly' })
					.pipe(str)
					.pipe(
						createWriteStream(`${downloadLocation}/${videoTitle}.mp3`).on('finish', () => {
							console.log('Donwloaded!')
						})
					);
		});
	ctx.body = 'video';
});

router.get('/playlist', async (ctx) => {
	ctx.body = 'playlist';
});
router.post('/playlist', async (ctx) => {
	console.log(ctx.request.query.code);
	ctx.body = 'playlist';
});

export default router;