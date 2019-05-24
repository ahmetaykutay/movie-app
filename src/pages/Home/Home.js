import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { SearchBox, MovieCard } from '../../components'
import { actions } from '../../store'
import { getGridArray, isMobile } from '../../utils'
import classes from './Home.module.scss'

function Home({ searchMovies, movieList }) {
	const [searchText, setSearchText] = useState('')
	const [cardPerRow, setCardPerRow] = useState(3)
	const [rowData, setRowData] = useState([])

	useEffect(() => {
		const resizeListener = () => {
			setCardPerRow(isMobile() ? 2 : 3)
		}
		window.addEventListener('resize', resizeListener)
		setCardPerRow(isMobile() ? 2 : 3)
		return () => {
			window.removeEventListener('resize', resizeListener)
		}
	}, [])

	useEffect(() => {
		setRowData(getGridArray(movieList, cardPerRow))
		return () => {}
	}, [movieList, cardPerRow])

	useEffect(() => {
		if (searchText.length > 2) {
			searchMovies(searchText)
		}
	}, [searchText])

	return (
		<div className="page">
			<SearchBox onChange={setSearchText} />
			<div className={classes.content}>
				{rowData.map((row, i) => (
					<div className="row" key={`row-${i}`}>
						{row.map((column, j) => (
							<MovieCard
								key={column.imdbID + j}
								title={column.Title}
								genre={column.Genre}
								imgSrc={column.Poster}
								onClick={() => {}}
							/>
						))}
					</div>
				))}
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)
