import { combineReducers } from 'redux';
import successReducer from './successReducer';
import guessedWordsReducer from './guessedWordsReducer';
import secretWordReducer from './secretWordReducer';

// this will house CombineReducers func which combines 
// multiple Reducers into Single Object - redux store
export default combineReducers({
  // passing each of our Reducers as key/value properties to create State Object in Redux Store
  success: successReducer,
  guessedWords: guessedWordsReducer,
  secretWord: secretWordReducer
})
