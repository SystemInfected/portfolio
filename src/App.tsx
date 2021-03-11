import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import TextEditor from './components/TextEditor'
import './App.scss'

const App = () => {
  const text = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraphs.' }],
    },
  ]

  const [ text2, setText ] = useState([]);
  const toolbar = [
    'basics',
    'lists',
    'links'
  ]

  useEffect(() => {

  });

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/portfolio/editor">Editortest</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/portfolio/editor">
            <>
            <h1>Editortest</h1>
            <TextEditor editorText={text} toolbar={toolbar} />
            </>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
