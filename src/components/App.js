import React from 'react'
import '../App.css';
import Congrats from './Congrats';

function App() {
  return (
    <div className="App">
      <h1>Testing App - Jetto</h1>
      <Congrats success={true} />
    </div>
  )
}

export default App
