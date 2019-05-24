import { fork, takeEvery, put, all } from 'redux-saga/effects'
import { SEARCH_MOVIES } from '../actions/actionTypes'
import { searchMoviesDone } from '../actions/movies'
import api from '../../core/api'

function* searchMovies(action) {
	let error, data
	try {
		const res = yield api.search(action.payload)
		if (res.Error) {
			error = res.Error
		} else {
			data = Array.isArray(res) ? res : [res]
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
