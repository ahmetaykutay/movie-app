import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './core/routes'
import store from './store'
import './styles/main.scss'

function App() {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
