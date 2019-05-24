import React from 'react'
import classes from './SearchBox.module.scss'

export default function SearchBox({ onChange, inputDelay, inputLength }) {
	let timeout

	const handleInputChange = val => {
		timeout = setTimeout(() => {
			if (inputLength && val.length < inputLength) {
				return
			}
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
  inputDelay: 300,
  inputLength: 3
}
