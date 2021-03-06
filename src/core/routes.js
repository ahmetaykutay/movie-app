import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, Detail } from '../pages'

export default function AppRouter() {
	return (
		<Router>
			<Route path="/" exact component={Home} />
			<Route path="/detail/:imdbID" component={Detail} />
		</Router>
	)
}
