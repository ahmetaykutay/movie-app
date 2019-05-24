import React from 'react'
import classes from './MovieCard.module.scss'

export default function MovieCard({ title, genre, imgSrc, onClick }) {
	return (
		<div onClick={onClick} className={classes.MovieCard}>
			<img src={imgSrc} />
			<div className={classes.info}>
				<h1>{title}</h1>
				<div className={classes.genre}>
					<p>
						<b>Genre: </b>
					</p>{' '}
					{genre.split(',').map(g => (
						<span key={g}>{g}</span>
					))}
				</div>
			</div>
			<div className={classes.seeDetail}>see details =></div>
		</div>
	)
}
