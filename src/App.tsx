import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.scss'

const App = () => {
  return (
    <Router>
      <Switch>
          <Route path="/">
            <>
            <h1>Test</h1>
            </>
          </Route>
        </Switch>
    </Router>
  )
}

export default App
