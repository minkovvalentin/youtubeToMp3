//example playlist: PLDEEIABRZpZN3Qmq6DoexsQVuJdbHkvEf
//example video: https://www.youtube.com/watch?v=wYZq7VwkQFA

process.setMaxListeners(0);

const fs = require('fs');
const progress = require('progress-stream');
const argv = require('minimist')(process.argv.slice(2));
const ytdl = require('ytdl-core');
const shell = require('shelljs');
var numeral = require('numeral');
const chalk = require('chalk');

const { getPlaylistData } = require('./api/playlist');

const str = progress({
	time: 100
});
const log = console.log;
const link = argv.vid;
const playlist = argv.pl;
const downloadLocation = `./downloads/${playlist ? 'playlists' : 'videos'}`
let playlistName = '';
let videoTitle = ''
let playlistItems = [];

if (!link && !playlist) throw new Error('You must provide a youtube link or a playlist code!');

if (!playlist) {
	ytdl(link)
		.on('info', (info) => {
			videoTitle = info.title;
			createDir(downloadLocation),
				ytdl(link, { quality: 'highestaudio', filter: 'audioonly' })
					.pipe(str)
					.pipe(
						fs.createWriteStream(`${downloadLocation}/${videoTitle}.mp3`).on('finish', () => {
							console.log('Donwloaded!')
						})
					);
		});
} else {
	getPlaylistData(playlist).then((result) => {
		getPlaylistItems(result);
	})
}

async function getPlaylistItems(result) {
	playlistName = result.title;
	playlistItems = result.items;
	createDir(downloadLocation + `/${playlistName}`)
	for (let i = 0; i < playlistItems.length; i++) {
		console.log(i);
		const item = playlistItems[i];
		videoTitle = formatName(item.title);
		await getPlaylistItem(item, `${downloadLocation}/${playlistName}/${videoTitle}.mp3`);
	}
}

async function getPlaylistItem(item, dest) {
	const stream = fs.createWriteStream;
	return ytdl(item.url, { quality: 'highestaudio', filter: 'audioonly' })
		.pipe(str)
		.pipe(stream(dest))
}

function formatName(name) {
	return name.replace("/", " ").replace("\\", " ");
}

function createDir(dir) {
	shell.mkdir('-p', dir);
}

str.on('progress', function (progress) {
	console.clear();
	log(`
	${chalk.bold('Downlading mp3: ')} ${chalk.inverse(" ", videoTitle, " ")} 
	${chalk.bold('Run time: ')} ${numeral(progress.runtime).format('00:00:00')}
	${chalk.bold('Transfered: ')} ${numeral(progress.transferred).format('0 b')}
	${chalk.bold('Download speed: ')} ${numeral(progress.speed).format('0.00b')}
	`);
});


