const BASE_URL = 'http://www.omdbapi.com/'
const API_KEY = '1a7989f3'

function search(searchString, page = 1) {
	const querySting = [['apikey', API_KEY], ['s', searchString], ['page', page]]
		.map(queryData => queryData.join('='))
		.join('&')
	const url = `${BASE_URL}?${querySting}`
	return fetch(url, {
		method: 'GET'
	}).then(res => {
		return res.json()
	})
}

export default {
	search
}
