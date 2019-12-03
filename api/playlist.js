const ytpl = require('ytpl');

function getPlaylistData(code) {
	return ytpl(code)
}

module.exports = {
	getPlaylistData
}

