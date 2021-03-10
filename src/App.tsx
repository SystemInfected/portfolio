import React, { useState, useEffect } from 'react'
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
    <>
      <TextEditor editorText={text} toolbar={toolbar} />
    </>
  )
}

export default App
