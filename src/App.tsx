import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Hero from './components/Hero'
import NavBar from './components/NavBar'

import './css/Main.scss'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/">
					<>
						<Hero />
						<NavBar />
					</>
				</Route>
			</Switch>
		</Router>
	)
}

export default App
