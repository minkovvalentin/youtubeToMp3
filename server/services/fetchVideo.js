//example playlist: PLDEEIABRZpZN3Qmq6DoexsQVuJdbHkvEf
//example video: https://www.youtube.com/watch?v=wYZq7VwkQFA
// error https://www.youtube.com/watch?v=W05kE28TmPo

// TO DO:

// 1.Dont bottleneck the downloads. There should be 60 ACTIVE downloads at all time. Now the program waits for all the 
// downloads to finnish before continuing

// 2.If a file is downloaded, don't download it again.

// 3.Set a possiblity to set maximum downloads at a time

// 4.Choose between downloading videos and audio

// 5. Mp3 files should have playlist as album 

// 6.Add GUI


// ============================================
process.setMaxListeners(10);

const fs = require('fs');
const progress = require('progress-stream');
const argv = require('minimist')(process.argv.slice(2));
const ytdl = require('ytdl-core');
const shell = require('shelljs');
var numeral = require('numeral');
const chalk = require('chalk');

const { getPlaylistData } = require('./services/playlist');

const str = progress({
	time: 100
});
const link = argv.vid;
const playlist = argv.pl;
const downloadLocation = `./downloads/${playlist ? 'playlists' : 'videos'}`

if (!link && !playlist) throw new Error('You must provide a youtube link or a playlist code!');

if (!playlist) {
	ytdl(link)
		.on('error', (error) => console.log(error))
		.on('info', (info) => {
			let videoTitle = info.title;
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
	getPlaylistData(playlist)
		.then((result) => {
			getPlaylistItems(result);
		})
}

async function getPlaylistItems(result) {
	let playlistName = result.title;
	let playlistItems = result.items;
	downloading = [];
	createDir(downloadLocation + `/${playlistName}`)

	do {
		const item = playlistItems.shift();
		let videoTitle = formatName(item.title);
		let videoLocation = `${downloadLocation}/${playlistName}/${videoTitle}.mp3`;
		console.log(`${chalk.greenBright('Downloading')} ${chalk.yellowBright(item.title)}`);

		try {
			if (!fs.existsSync(videoLocation)) {
				downloading.push(getPlaylistItem(item, videoLocation));
			}
		} catch (err) {
			console.error(err)
		}

		if (downloading.length === 60) {
			await Promise.all(downloading)
				.then(() => {
					downloading = []
				})
		}


	} while (playlistItems.length !== 0);
}

function getPlaylistItem(item, dest) {
	return new Promise((resolve, reject) => {
		ytdl(item.url, { quality: 'highestaudio', filter: 'audioonly' })
			.on('error', (error) => reject(error))
			.pipe(fs.createWriteStream(dest))
			.on('close', () => resolve())
	}).catch((error) => onError(item, error, dest))
}

function formatName(name) {
	return name.replace(/([/\\\\])+/g, " ");
}

function createDir(dir) {
	shell.mkdir('-p', dir);
}

function onError(item, error, dest) {
	removeFile(dest, item.title)
	console.log(formatErrorMessage(item, error));
}

function formatErrorMessage(item, error) {
	return `
	${chalk.yellowBright(item.title)} ${chalk.redBright("can't be downloaded.")}
	${chalk.blueBright('Error Message:')} ${chalk.redBright(error)}
	`
}

function removeFile(dest, title) {
	fs.unlink(dest, (err) => {
		if (err) {
			console.error(err)
			return
		}
	})
}