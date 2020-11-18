// takes params
// using js set
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(''))
  const guessedLetterSet = new Set(guessedWord.split(''))

  // to count how many letters the set has in common
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;
}
