import React from 'react'
import classes from './MovieCard.module.scss'

export default function MovieCard({ title, type, year, imgSrc, onClick }) {
	return (
		<div onClick={onClick} className={classes.MovieCard}>
			<img src={imgSrc} />
			<h1>{title}</h1>
			<p>{type}</p>
			<p>{year}</p>
			<div className={classes.seeDetail}>see details =></div>
		</div>
	)
}
