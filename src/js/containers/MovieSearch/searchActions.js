import axios from 'axios';

export function updateSearch(title) {
	return {
		type: 'UPDATE_SEARCH',
		payload: { title }
	};
}

export function getMovie(title) {

    return {
        type:'GET_MOVIE',
        payload: axios.get(`/movieInfo/${title}`),
    };
}