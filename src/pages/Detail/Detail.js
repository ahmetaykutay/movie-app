import React from 'react'
import classes from './Detail.module.scss'

export default function Detail({ location }) {
	const { data } = location.state
	if (!data) {
		return (
			<div>
				<p>opps! there is an error</p>
			</div>
		)
	}
	return (
		<div className="page">
			<img className={classes.poster} src={data.Poster} />
			<h1 className={classes.title}>{data.Title}</h1>
			<p className={classes.plot}>{data.Plot}</p>
		</div>
	)
}
