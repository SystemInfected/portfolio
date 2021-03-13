import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'

import './css/Main.scss'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/">
					<>
						<Header />
					</>
				</Route>
			</Switch>
		</Router>
	)
}

export default App
