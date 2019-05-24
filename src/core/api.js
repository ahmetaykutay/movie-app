const BASE_URL = 'http://www.omdbapi.com/'
const API_KEY = '1a7989f3'

function search(searchString) {
	const querySting = [['apikey', API_KEY], ['t', searchString]]
		.map(queryData => queryData.join('='))
		.join('&')
	const url = `${BASE_URL}?${querySting}`
	return fetch(url, {
		method: 'GET'
	}).then(res => res.json())
}

export default {
	search
}
