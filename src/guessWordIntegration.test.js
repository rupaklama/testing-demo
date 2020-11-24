// importing our helper func to create TEST STORE
import { storeFactory } from '../test/testUtils';

// action creator
import { guessWord } from './actions';

// since we have many integration tests 
// describe is just the way of grouping tests context
// so this help document our tests, somebody looking at our tests
// can know what we are testing in each sections & also help to document
// if anyone is looking for failure, it would tell in which one of these context
// the failure occurred in

describe('guessWord action dispatcher', () => {
  // default secret word for our tests - successful guessed word
  const secretWord = 'party';

  // user unsuccessful guessed word
  // to call with guessWord Action Creator
  const unsuccessfulGuess = 'train';

  // we are going to have two test contexts - sets
  // FIRST context
  describe('no guessed words', () => {
    
    // setup beforeEach here 
    let store;
    const initialState = { secretWord }; // initial state - default secret word
    beforeEach(() => {
      // any logic we put here gets executed before all the tests below
      // initial state for our test contexts here
      store = storeFactory(initialState) // passing initial state inside our TEST store
    })

    // First, tests are going to dispatch Action Creators then they are going to check
    // to see whether the new state(user guessed word - 'train') 
    // we get is the same as the expected state - secretWord = 'party'
    test('updates state correctly for unsuccessful guess', () => {
      // First, we will dispatch the guessed word
      store.dispatch(guessWord(unsuccessfulGuess));
      
      // Second, we will get the current state from our Redux TEST Store , 
      // getState to access state in Test store
      const newState = store.getState() // updated state with user guessed word 'train'

      // Third, creating expected state object to compare to actual OBJECT in Test Store
      const expectedState = {
        ...initialState, // our secret word 'party'
        success: false, // we did not guess the word correctly, we got 'train' above
        guessedWords: [{  // state won't be empty anymore, it will have guessed word in it
          guessedWord: unsuccessfulGuess, // 'train' in guessedWord state in Test Store
          letterMatchCount: 3 // letters match counts 
        }]
      }
     
      // Fourth, we want new/current state in TEST Store to be expected state
      expect(newState).toEqual(expectedState)
    })

    test('updates state correctly for successful guess', () => {
      // First calling action creator with secret word - 'party'
      store.dispatch(guessWord(secretWord));

      // Second, we will get the current state from our Redux TEST Store , 
      // getState to access state in Test store
      const newState = store.getState()

      // Third, creating expected state object to compare to actual OBJECT in Test Store
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [{
          guessedWord: secretWord,
          letterMatchCount: 5,
        }],
      };
      expect(newState).toEqual(expectedState);
    })
  })

  // SECOND context 
  describe('some guessed words', () => {
    const guessedWords = [ { guessedWord: 'agile', letterMatchCount: 1 } ];
    const initialState = { guessedWords, secretWord }
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    })
    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [...guessedWords, { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }]
      };
      expect(newState).toEqual(expectedState);
    });
    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 }]
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
