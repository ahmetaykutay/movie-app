import React from 'react'
import { SearchBox } from '../../components'

export default function Home() {
	return (
		<div className="page">
			<SearchBox onChange={text => {console.log(text)}} />
		</div>
	)
}
