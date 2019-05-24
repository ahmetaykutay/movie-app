import React, { useState, useEffect } from 'react'
import classes from './Detail.module.scss'
import api from '../../core/api'

export default function Detail({ location, match }) {
	const [plot, setPlot] = useState('')
	const { data } = location.state
	if (!data) {
		return (
			<div>
				<p>opps! there is an error</p>
			</div>
		)
	}

	const fetchData = async () => {
		const response = await api.getById(match.params.imdbID)
		setPlot(response.Plot)
	}

	useEffect(() => {
		fetchData()
		return () => {}
	}, [])

	return (
		<div className="page">
			<img className={classes.poster} src={data.Poster} />
			<h1 className={classes.title}>{data.Title}</h1>
			<p className={classes.plot}>{plot}</p>
		</div>
	)
}
