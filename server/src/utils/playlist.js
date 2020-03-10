const ytpl = require('ytpl');

function getPlaylistData(code) {
	return ytpl(code, { limit: Math.pow(10, 1000) });
}

module.exports = {
	getPlaylistData
}

