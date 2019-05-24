import React from 'react'
import classes from './SearchBox.module.scss'

export default function SearchBox({ onChange, inputDelay }) {
	let timeout

	const handleInputChange = val => {
		timeout = setTimeout(() => {
			onChange(val)
		}, inputDelay)
	}

	return (
		<input
			onKeyDown={() => {
				clearTimeout(timeout)
			}}
			className={classes.input}
			onChange={e => handleInputChange(e.currentTarget.value)}
		/>
	)
}

SearchBox.defaultProps = {
  inputDelay: 300
}
