import { fork, takeEvery, put } from 'redux-saga/effects'
import { SEARCH_MOVIES } from '../actions/actionTypes'
import { searchMoviesDone } from '../actions/movies'
import store from '../'
import api from '../../core/api'

function* searchMovies(action) {
	const { currentPage, movieList } = store.getState().movies
	let error, data
	try {
		const res = yield api.search(action.payload, currentPage)
		if (res.Error) {
			error = res.Error
		} else {
			if (currentPage === 1)
				data = Array.isArray(res.Search) ? res.Search : [res.Search]
			else
				data = [
					...movieList,
					...(Array.isArray(res.Search) ? res.Search : [res.Search])
				]
		}
	} catch (err) {
		error = err
	} finally {
		yield put(searchMoviesDone(data, error))
	}
}

function* watch() {
	yield takeEvery(SEARCH_MOVIES, searchMovies)
}

export default [fork(watch)]
