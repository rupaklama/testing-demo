import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = (props) => {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">
        Try to guess the secret word!
      </span>
    )
  }

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
