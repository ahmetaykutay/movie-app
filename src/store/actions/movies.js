import { SEARCH_MOVIES, SEARCH_MOVIES_DONE } from './actionTypes'

export const searchMovies = (payload) => ({
	type: SEARCH_MOVIES,
	payload
})

export const searchMoviesDone = (payload, error = null) => ({
	type: SEARCH_MOVIES_DONE,
	payload: payload ? payload : [],
	error
})
