import React from 'react'

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

function App() {
  return (
    <div className="container">
      <h1>Testing App - Jetto</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[
        { guessedWord: 'train', letterMatchCount: 3 }
      ]} />
    </div>
  )
}

export default App
