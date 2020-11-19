// action types
import { CORRECT_GUESS } from '../actions';

// reducer
import successReducer from './successReducer';

// No action & no state, return default value of false
test('returns default initial state of `false` when no action is passed', () => {
  // we can pass in undefined so the reducer will use default state as its starting state
  const newState = successReducer(undefined, {}); // no state & no action
  expect(newState).toBe(false);
});

// return 'true' when receiving CORRECT_GUESS action type
test('returns state of true upon receiving an action of type `CORRECT_GUESS`', () => {
  // here, we are going to pass in both State & Action 
  // we can pass in undefined so the reducer will use default state as its starting state
  // not concern here what initial state is
  const newState = successReducer(undefined, { type: CORRECT_GUESS})
  expect(newState).toBe(true)
});

// can't use 'toBe' when comparing mutable data types like objects & arrays
// we can only use 'toBe' for immutable types(primitive) like numbers & strings

// Mutable objects are objects whose value can change once created,
// while immutable objects are those whose value cannot change once created.
// In JavaScript numbers, strings, null, undefined and Booleans are primitive types which are immutable.
// Objects, arrays, functions, classes, maps, and sets are mutable.
