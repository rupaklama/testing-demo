// objects operation names
export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
};

// Type is required, payload property is optional
// here, export in the beginning is the Named export,
// that's why no default export, helps when there are many functions here
export const correctGuess = () => {
  return {
    type: actionTypes.CORRECT_GUESS
  }
}
