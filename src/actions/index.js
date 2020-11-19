// variable for action types which will give us better feedback if 
// we mistype action types, avoiding variable undefined issues
export const CORRECT_GUESS = 'CORRECT_GUESS'

// Type is required, payload property is optional
// here, export in the beginning is the Named export,
// that's why no default export, helps when there are many functions here

// success state is when there's successful correct guess
export const correctGuess = () => {
  return {
    type: CORRECT_GUESS,
  };
};
