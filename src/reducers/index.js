import { combineReducers } from 'redux';
import successReducer from './successReducer';

// this will house CombineReducers func which combines 
// multiple Reducers into Single Object - redux store
export default combineReducers({
  // passing each of our Reducers as key/value properties to create State Object in Redux Store
  success: successReducer
})
