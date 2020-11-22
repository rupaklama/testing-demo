import React from 'react'

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';

function App() {
  return (
    <div className="container">
    
      <h1>Testing App - Jetto</h1>

      <Congrats success={true} />
      <GuessedWords guessedWords={[
        { guessedWord: 'train', letterMatchCount: 3 }
      ]} />
      <Input />
    </div>
  )
}

export default App
