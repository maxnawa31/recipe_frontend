import React, {useEffect, useMemo, useState} from 'react';
import {createEditor} from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import logo from './logo.svg';
import './App.css';

const App = () => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ])
  const handleChange = (newValue) => {
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <Slate editor={editor} value={value} onChange={(newValue) => handleChange(newValue)}>
      <Editable />
    </Slate>
  )
}

export default App;
