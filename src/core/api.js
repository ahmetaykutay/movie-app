const BASE_URL = 'http://www.omdbapi.com/'
const API_KEY = '1a7989f3'

function get(url) {
	return fetch(url, {
		method: 'GET'
	}).then(res => {
		return res.json()
	})
}

function search(searchString = '', page = 1) {
	const querySting = [['apikey', API_KEY], ['s', searchString], ['page', page]]
		.map(queryData => queryData.join('='))
		.join('&')
	const url = `${BASE_URL}?${querySting}`
	return get(url)
}

function getById(id) {
	return get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`)
}

export default {
	search,
	getById,
	get
}
