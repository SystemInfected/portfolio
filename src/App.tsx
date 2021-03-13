import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Hero from './components/Hero'

import './css/Main.scss'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/">
					<>
						<Hero />
					</>
				</Route>
			</Switch>
		</Router>
	)
}

export default App
