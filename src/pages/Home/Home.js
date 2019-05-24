import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { SearchBox } from '../../components'
import { actions } from '../../store'

function Home({searchMovies}) {
	const [searchText, setSearchText] = useState('')

	useEffect(() => {
		if (searchText.length > 2) {
			// api call here
			searchMovies(searchText)
		}
	}, [searchText])

	return (
		<div className="page">
			<SearchBox onChange={setSearchText} />
			<div>
				<div />
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	movieList: state.movies.movieList
})

const mapDispatchToProps = dispatch => ({
	searchMovies: searchText => dispatch(actions.movies.searchMovies(searchText))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
