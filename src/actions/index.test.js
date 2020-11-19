import { correctGuess, CORRECT_GUESS } from './index';

// describe func/statement is to group together similar sets of tests
// to prevent DRY code
// first arg describes both the tests below, second arg func wraps both tests below

describe('correctGuess', () => {
  // we are going to call action creators & write expectations on action
  test('returns an action with type `CORRECT_GUESS`', () => {
    const action = correctGuess();

    // can't use 'toBe' when comparing mutable data types like objects & arrays
    // we can only use 'toBe' for immutable types(primitive types) like numbers & strings 
    expect(action).toEqual({ type: CORRECT_GUESS });
  });
});

// Mutable objects are objects whose value can change once created, 
// while immutable objects are those whose value cannot change once created. 
// In JavaScript numbers, strings, null, undefined and Booleans are primitive types which are immutable. 
// Objects, arrays, functions, classes, maps, and sets are mutable.
