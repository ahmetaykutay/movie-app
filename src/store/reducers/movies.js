import { SEARCH_MOVIES, SEARCH_MOVIES_DONE } from '../actions/actionTypes'

const initialState = {
	movieList: [],
	error: null,
	currentPage: 1,
	isLoading: false,
	searchString: ''
}

export default function(state = initialState, action) {
	const { type, payload, error } = action
	switch (type) {
		case SEARCH_MOVIES:
			return {
				...state,
				isLoading: true,
				currentPage:action.payload.page || 1,
				searchString: action.payload.searchString
			}
		case SEARCH_MOVIES_DONE:
			return { ...state, movieList: payload, error, isLoading: false }
		default:
			return state
	}
}
