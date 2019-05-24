import { fork, takeEvery, put, all } from 'redux-saga/effects'
import { SEARCH_MOVIES } from '../actions/actionTypes'
import { searchMoviesDone } from '../actions/movies'

function* searchMovies() {
	let error, data
	try {
		yield data = [{
			"Title": "Guardians of the Galaxy Vol. 2",
			"Year": "2017",
			"Rated": "PG-13",
			"Released": "05 May 2017",
			"Runtime": "136 min",
			"Genre": "Action, Adventure, Comedy, Sci-Fi",
			"Director": "James Gunn",
			"Writer": "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
			"Actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
			"Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
			"Language": "English",
			"Country": "USA",
			"Awards": "Nominated for 1 Oscar. Another 12 wins & 42 nominations.",
			"Poster": "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg",
			"Ratings":
			[
					{
							"Source": "Internet Movie Database",
							"Value": "7.7/10"
					},
					{
							"Source": "Rotten Tomatoes",
							"Value": "84%"
					},
					{
							"Source": "Metacritic",
							"Value": "67/100"
					}
			],
			"Metascore": "67",
			"imdbRating": "7.7",
			"imdbVotes": "471,312",
			"imdbID": "tt3896198",
			"Type": "movie",
			"DVD": "22 Aug 2017",
			"BoxOffice": "$389,804,217",
			"Production": "Walt Disney Pictures",
			"Website": "https://marvel.com/guardians",
			"Response": "True"
	}, {"Title":"Inception","Year":"2010","Rated":"PG-13","Released":"16 Jul 2010","Runtime":"148 min","Genre":"Action, Adventure, Sci-Fi, Thriller","Director":"Christopher Nolan","Writer":"Christopher Nolan","Actors":"Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy","Plot":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","Language":"English, Japanese, French","Country":"USA, UK","Awards":"Won 4 Oscars. Another 152 wins & 204 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.8/10"},{"Source":"Rotten Tomatoes","Value":"86%"},{"Source":"Metacritic","Value":"74/100"}],"Metascore":"74","imdbRating":"8.8","imdbVotes":"1,826,846","imdbID":"tt1375666","Type":"movie","DVD":"07 Dec 2010","BoxOffice":"$292,568,851","Production":"Warner Bros. Pictures","Website":"http://inceptionmovie.warnerbros.com/","Response":"True"}, {"Title":"Inception","Year":"2010","Rated":"PG-13","Released":"16 Jul 2010","Runtime":"148 min","Genre":"Action, Adventure, Sci-Fi, Thriller","Director":"Christopher Nolan","Writer":"Christopher Nolan","Actors":"Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy","Plot":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","Language":"English, Japanese, French","Country":"USA, UK","Awards":"Won 4 Oscars. Another 152 wins & 204 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.8/10"},{"Source":"Rotten Tomatoes","Value":"86%"},{"Source":"Metacritic","Value":"74/100"}],"Metascore":"74","imdbRating":"8.8","imdbVotes":"1,826,846","imdbID":"tt1375666","Type":"movie","DVD":"07 Dec 2010","BoxOffice":"$292,568,851","Production":"Warner Bros. Pictures","Website":"http://inceptionmovie.warnerbros.com/","Response":"True"}, {"Title":"Inception","Year":"2010","Rated":"PG-13","Released":"16 Jul 2010","Runtime":"148 min","Genre":"Action, Adventure, Sci-Fi, Thriller","Director":"Christopher Nolan","Writer":"Christopher Nolan","Actors":"Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy","Plot":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","Language":"English, Japanese, French","Country":"USA, UK","Awards":"Won 4 Oscars. Another 152 wins & 204 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.8/10"},{"Source":"Rotten Tomatoes","Value":"86%"},{"Source":"Metacritic","Value":"74/100"}],"Metascore":"74","imdbRating":"8.8","imdbVotes":"1,826,846","imdbID":"tt1375666","Type":"movie","DVD":"07 Dec 2010","BoxOffice":"$292,568,851","Production":"Warner Bros. Pictures","Website":"http://inceptionmovie.warnerbros.com/","Response":"True"}]
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
