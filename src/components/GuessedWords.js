import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = (props) => {
  let contents;

  // if guessedWords prop is empty, show this text content
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">
        Try to guess the secret word!
      </span>
    )
  } else {
    // else if guessedWords prop is not empty, map & show this text content
    const guessedWordsRows = props.guessedWords.map((word, index) => (
      <tr data-test="guessed-word" key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ))
    contents = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            { guessedWordsRows }
          </tbody>
        </table>
      </div>
    )
  }

  
  // display one of the content above
  return (
    <div data-test='component-guessed-words'>
      { contents }
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    // we want props to be array of objects, shape is like specifying particular format
    PropTypes.shape({
      // props are object keys
      guessedWord: PropTypes.string.isRequired, 
      letterMatchCount: PropTypes.number.isRequired,
    }).isRequired, // the whole guessedWords prop is required 
  ),
}

export default GuessedWords
