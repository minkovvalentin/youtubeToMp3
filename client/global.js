import { linkTypes } from './enums/linkTypes.enum';
import { video, playlist } from './api/index';

function fetchEndpointBasedOnContentType(key, data) {
	switch (key) {
		case linkTypes.PLAYLIST:
			return playlist(data);
		case linkTypes.VIDEO:
			return video(data);
	}
}

export {
	fetchEndpointBasedOnContentType
}