// action type
import { CORRECT_GUESS } from '../actions/';

// the way reducer works is that they take current state & action objects
// to return a new global state in the redux store object

// this reducer state starts with false - current state of this reducer 
// flip success to true upon CORRECT_GUESS action
const successReducer = (state=false, action) => { 
  switch(action.type) {
    case CORRECT_GUESS:
      // it doesn't matter what the existing state is, 
      // we want to return state of true because CORRECT_GUESS will be dispatch
      // when the user has successfully guessed the word
      return true;
    default:
      return state;
  }
  
}

export default successReducer;
