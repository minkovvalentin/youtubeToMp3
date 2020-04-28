import { endpoint } from '../config/endpoint';

function video(url) {
	return `${endpoint}/video?url=${url}`;
}

function playlist(code) {
	return `${endpoint}/playlist?code=${code}`;
}

export { video, playlist };