import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = (props) => {
  return (
    <div>
      Guessed Words
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
