import React from 'react'
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom'
import { Home, Detail } from '../pages'

export default function AppRouter() {
	return (
		<Router history={browserHistory}>
			<Route path="/" exact component={Home} />
			<Route path="/detail/" component={Detail} />
		</Router>
	)
}
