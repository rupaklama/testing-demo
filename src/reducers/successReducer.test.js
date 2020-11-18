// action types
import { actionTypes } from '../actions';

// reducer
import successReducer from './successReducer';

test('returns default initial state of `false` when no action is passed', () => {
  const newState = successReducer(undefined, {}); // no state & action
  expect(newState).toBe(false);
});

test('returns state of true upon receiving an action of type `CORRECT_GUESS`', () => {
  // here, we are going to pass in both State & Action 
  // we can pass in undefined so the reducer will use default state as its starting state
  // not concern here what initial state is
  const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS})
  expect(newState).toBe(true)
});

// can't use 'toBe' when comparing mutable data types like objects & arrays
// we can only use 'toBe' for immutable objects like numbers & strings

// Mutable objects are objects whose value can change once created,
// while immutable objects are those whose value cannot change once created.
// In JavaScript numbers, strings, null, undefined and Booleans are primitive types which are immutable.
// Objects, arrays, functions, classes, maps, and sets are mutable.
