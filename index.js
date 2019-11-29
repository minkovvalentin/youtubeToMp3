//example playlist: PLDEEIABRZpZN3Qmq6DoexsQVuJdbHkvEf
//example video: https://www.youtube.com/watch?v=wYZq7VwkQFA
const fs = require('fs');
const progress = require('progress-stream');
const argv = require('minimist')(process.argv.slice(2));
const ytdl = require('ytdl-core');
const shell = require('shelljs');
const ytpl = require('ytpl');
var numeral = require('numeral');
const chalk = require('chalk');

const str = progress({
	time: 100
});
const log = console.log;
const link = argv.vid;
const playlist = argv.pl;
const downloadLocation = `./downloads/${playlist ? 'playlists' : 'videos'}`
let videoTitle = ''

if (!link && !playlist) throw new Error('You must provide a youtube link or a playlist code!');

if (!playlist) {
	ytdl(link)
		.on('info', (info) => {
			videoTitle = info.title;
			createDir(downloadLocation),
				ytdl(link, { quality: 'highestaudio', filter: 'audioonly' })
					.pipe(str)
					.pipe(
						fs.createWriteStream(`${downloadLocation}/${videoTitle}.mp3`)
					);
		});
} else { // a playlist provided
	// to do
	console.log(playlist)
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

process.on('SIGINT', function () {
	process.exit();
});