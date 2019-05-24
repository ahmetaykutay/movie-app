import { SEARCH_MOVIES_DONE } from '../actions/actionTypes'

const initialState = {
	movieList: [],
	error: null
}

export default function(state = initialState, action) {
	const { type, payload = [], error } = action
	switch (type) {
		case SEARCH_MOVIES_DONE:
			return { ...state, movieList: payload, error }
		default:
			return state
	}
}
