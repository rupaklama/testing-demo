import React from 'react';
import { shallow } from 'enzyme';

import GuessedWords from './GuessedWords';

// npm install --save-dev check-prop-types
// To check component prop types, we will use npm library ‘check-prop-types’.
// Instead of throwing a warning if the prop types are incorrect, it will actually return an error.
// That’s nice because instead of mocking ‘console.error’, we will just get the output of
// checkPropTypes method to see whether or not we get an error.
import checkPropTypes from 'check-prop-types';

// default props for component to test props type checking
// every component needs to have default props when doing Props Types Testing
const defaultProps = 
  { // Note: DON'T update this default props, if you do find out where else you need to update your code
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
  }
 // NOTE: without this default props, we will get warning errors as
 // each of our test below expects default props which is handled in setup helper func

// setup function for dry
// this func is going to take props, empty object by default
// props is an object with key/value pair
const setup = (props = {}) => {
  // ...defaultProps - pass in defaultProps
  // ...props is to add additional props
  const setupProps = { ...defaultProps, ...props };

  // passing all combine props into our component for testing
  return shallow(<GuessedWords {...setupProps} />);
};

// Test stages

test('does not throw warning with expected props', () => {

  // NOTE: at first, this test will automatically pass since our component has no props defined

  // will see what kind a error we get, if we run checkPropTypes with that our default props
  // pass .propTypes into our component & props that we want to test,
  // then tell it we are testing properties 'prop'
  // then you give name of the component - GuessedWords.name
  const propError = checkPropTypes(
    GuessedWords.propTypes,
    defaultProps,
    'prop',
    GuessedWords.name
  );

  // since we are using checkPropTypes npm package, we get return an error instead of warning
  // what we expect here for an error is to be 'undefined' because an error will
  // be undefined if prop passes all the test
  expect(propError).toBeUndefined(); // jest method
});

// describe is just the way of grouping tests context
// so this help document our tests, somebody looking at our tests
// can know what we are testing in each sections & also help to document
// if anyone is looking for failure, it would tell in which one of these context 
// the failure occurred in
describe('if there are no words guessed', () => {

})

describe('if there are words guessed', () => {

})
