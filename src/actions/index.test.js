// calling moxios here to test axios get request in getSecretWord action creator
// Test install moxios
// axios will now send requests to moxios instead of http
// Test specifies moxios response
import moxios from 'moxios';

// our Test STORE
import { storeFactory } from '../../test/testUtils';

// we are testing 'getSecretWord 'action creator here that makes axios request
import { getSecretWord } from './';

// Test calls action creator
// Action creator calls axios
// Axios uses Moxios instead of 'http' for request
// Action creator receives Moxios Response from axios

// we might have more action creators, so using describe statement here
// describe is just the way of grouping tests context
// so this help document our tests, somebody looking at our tests
// can know what we are testing in each sections & also help to document
// if anyone is looking for failure, it would tell in which one of these context
// the failure occurred in
describe('getSecretWord action creator', () => {
  // helper function for code reuse/DRY
  // runs before each of our tests
  beforeEach(() => {
    // setting up Moxios in beforeEach statement
    // telling Axios to make/send request to Moxios instead to our 'http' address
    moxios.install(); // if we have axios instance, we pass it here as an argument
    // we are not using axios instance for this simple app
    // no arg for default settings
  });

  // helper function to unmount or clean up after each test
  // to return Axios to its original state
  afterEach(() => {
    // turn off moxios to stop making same request again
    moxios.uninstall();
  });

  // what we want to test here is simply that it add 'response' word to the state
  // doing integration test here to test both the action creator & reducer
  // in order to add 'response' word to the state
  // Action creator will retrieve the 'response' word &
  // Reducer will add it to the state

  // we could test them separately but here we are doing integration test
  // so that we are leaving the action creator & reducer as implementation details
  // the goal is to have less test re-writes if we need to refactor our code in the future
  test('adds response word to state', () => {
    // creating store using our test store - storeFactory()
    
    // set up our secret word here which will be returning from Moxios 
    // Moxios will return a response which include this secret word 
    // in order to mock response from http server
    const secretWord = 'party';

    // creating our Test Redux Store
    // to see if getSecretWord action creator updates the store with our secret word
    const store = storeFactory();

    // now setting up moxios.wait to tell it how to respond when axios sends a request
    // sending back response from moxios to axios
    moxios.wait(() => {
      // to access most recent request
      const request = moxios.requests.mostRecent();
      // sending back response
      request.respondWith({
        status: 200,
        response: secretWord // mock response with same value that we get from server
      })

    })

    // Then, we want to dispatch an action using our Test Store
    // async action - store.dispatch() returns a promise
    // when the promise resolves, put test in .then() callback 
    // Test will run after dispatch completes - axios call
    return store.dispatch(getSecretWord())
      .then(() => {
        // our goal is to find out if we have the secret word from axios 
        // pass on form Moxios through our (Test Store)
        const newState = store.getState();
        expect(newState.secretWord).toBe(secretWord);
      })
  })
});
