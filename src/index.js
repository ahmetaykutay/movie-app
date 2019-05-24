import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './core/routes'
import './styles/main.scss'

function App() {
	return <AppRouter />
}

ReactDOM.render(<App />, document.getElementById('root'))

