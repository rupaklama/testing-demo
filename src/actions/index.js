// for test with moxios
import axios from 'axios';

// variable for action types which will give us better feedback if 
// we mistype action types, avoiding variable undefined issues
import { getLetterMatchCount } from '../helpers';

export const CORRECT_GUESS = 'CORRECT_GUESS';
export const GUESS_WORD = 'GUESS_WORD';
export const SET_SECRET_WORD = 'SET_SECRET_WORD';

// Type is required, payload property is optional
// here, export in the beginning is the Named export,
// that's why no default export, helps when there are many functions here

// success state is when there's successful correct guess
// NOTE: Removing this since it's going to be dispatch within/with guessWord action below
// export const correctGuess = () => {
//   return {
//     type: CORRECT_GUESS,
//   };
// };

// With Redux Thunk, we can also dispatch multiple Action Creators
// guessWord action creator with param
export const guessWord = (guessedWord) => {
  return function(dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: GUESS_WORD,
      payload: { guessedWord, letterMatchCount }
    });

    if (guessedWord === secretWord) {
      dispatch({ type: CORRECT_GUESS });
    }

  };
};

// action creator to test moxios
export const getSecretWord = () => async (dispatch) => {
  
  try {
    // since we are using moxios, we will never hit this address during the test
    const { data } = await axios.get('http://localhost:3030')

    // now dispatch above data to reducer
    dispatch({
      type: SET_SECRET_WORD,
      payload: data
    })
  } catch (error) {
    console.log(error.message)
  }


}
