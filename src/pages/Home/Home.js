import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { SearchBox, MovieCard } from '../../components'
import { actions } from '../../store'
import { getGridArray, isMobile } from '../../utils'
import classes from './Home.module.scss'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			searchText: '',
			cardPerRow: 3
		}
	}
	componentDidMount() {
		window.addEventListener('resize', this.resizeListener)
		window.addEventListener('scroll', this.handleIninitefScroll)
		this.setState({ cardPerRow: isMobile() ? 2 : 3 })
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.resizeListener)
		window.removeEventListener('scroll', this.handleIninitefScroll)
	}

	resizeListener = () => {
		this.setState({ cardPerRow: isMobile() ? 2 : 3 })
	}

	handleIninitefScroll = e => {
		const { searchMovies, currentPage, isLoading } = this.props
		const { searchText } = this.state
		if (isLoading) {
			return
		}
		const lastElement = document.querySelector(
			`.${classes.content} > .scroll-el:last-child`
		)
		const lastElementOffset =
			lastElement.offsetTop + lastElement.clientHeight - 350
		const pageOffset = window.pageYOffset + window.innerHeight
		if (pageOffset > lastElementOffset)
			searchMovies(searchText, currentPage + 1)
	}

	handleSearchTextChange = searchText => {
		const { searchMovies } = this.props
		this.setState({ searchText })
		if (searchText.length > 2) {
			searchMovies(searchText)
		}
	}

	render() {
		const { history, error, isLoading, movieList } = this.props
		const { cardPerRow } = this.state
		const rowData = getGridArray(movieList, cardPerRow)
		return (
			<div className="page">
				<SearchBox onChange={this.handleSearchTextChange} />
				<div className={classes.content}>
					{error ? <p>{error}</p> : null}
					{rowData.map((row, i) => (
						<div className="row scroll-el" key={`row-${i}`}>
							{row.map((column, j) => (
								<MovieCard
									key={column.imdbID + j}
									title={column.Title}
									type={column.Type}
									year={column.Year}
									imgSrc={column.Poster}
									onClick={() => {
										history.push(`/detail/${column.imdbID}`, { data: column })
									}}
								/>
							))}
						</div>
					))}
					{isLoading ? <p>loading...</p> : null}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	movieList: state.movies.movieList,
	error: state.movies.error,
	isLoading: state.movies.isLoading,
	currentPage: state.movies.currentPage
})

const mapDispatchToProps = dispatch => ({
	searchMovies: (searchText, page) =>
		dispatch(actions.movies.searchMovies({ searchText, page }))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)
