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
const defaultProps = {
  // Note: DON'T update this default props, if you do, find out where else you need to update your code
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};
// NOTE: without this default props, we will get warning errors as
// each of our test below expects default props which is handled in setup helper func

// setup function for dry
// this func is going to take props, empty object as arg
// props is an object with key/value pair
const setup = (props = {}) => {
  // ...defaultProps - pass in defaultProps
  // ...props is to add additional props through props arg
  const setupProps = { ...defaultProps, ...props };

  // passing spread props(all props) into our component for testing
  return shallow(<GuessedWords {...setupProps} />);
};

// Test stages

test('does not throw warning with expected props', () => {
  // NOTE: at first, this test will automatically pass since our component has no props defined
  // in actual GuessedWords component

  // will see what kind a error we get, if we run checkPropTypes with that our default props
  // checkPropTypes(args) are as follows
  // 1. pass 'Congrats.propTypes' into our component & 
  // 2. expectedProps - props that we want to test, 
  // 3. then tell it we are testing properties 'prop'
  // 4. then give name of our component - Congrats.name
  const propError = checkPropTypes(
    GuessedWords.propTypes, // add in .propTypes into our component
    defaultProps, // our default props
    'prop', // then tell it we are testing properties 'prop'
    GuessedWords.name // then you give name of the component - GuessedWords.name
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
  // data-test-attribute is an attribute syntax - [type="text"])
  // which is one of the valid CSS enzyme selector to find html elements to render
  // with Find selector - to find html elements

  // find method/selector returns back an array which contains every elements/instances that matches
  // the selector - .find(selector)
  // although we only care about only one element

  // using data-test-attribute on the component's html elements to be more specific
  // using data-test-attribute to easy to find html elements & to render it
  // using expect statement to throw an error,
  // value - attribute syntax ([href="foo"]

  // if there's a common code between multiple tests in a single file,
  // we use jest's beforeEach helper func to extract that common logic
  let wrapper;
  beforeEach(() => {
    // any logic we put here gets executed before all the tests below
    // over-riding top level default props above & passing new prop here to test
    // for this particular describe - group of tests
    wrapper = setup({ guessedWords: [] });
  });

  // if there are no words guessed, run these tests

  test('renders without error', () => {
    // we want to find one div element with this particular data-test-attribute (test class name)
    // to make sure this div element is being render
    const component = wrapper.find('[data-test="component-guessed-words"]'); // attrib/value
    expect(component.length).toBe(1);
  });

  test('renders instructions to guess a word', () => {
    // we want to find one span element with this particular data-test-attribute (test class name)
    // to make sure this span element has some text content
    const instructions = wrapper.find('[data-test="guess-instructions"]'); 
    // text length to be non-zero
    // using not method of jest for that
    expect(instructions.text().length).not.toBe(0)
    // text method returns a string of the rendered text of the current render tree
    // text method to extract the text of an element from our component with
    // specific to that particular data-test-attribute - 'guess-instructions'
  });
});

describe('if there are words guessed', () => {
  // default props for these tests 
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 },
  ];

  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: guessedWords });
  });

  test('renders without error', () => {
    const component = wrapper.find('[data-test="component-guessed-words"]'); // attrib/value
    expect(component.length).toBe(1);
  })

  test('renders "guessed words" section', () => {
    const guessedWordsNode = wrapper.find('[data-test="guessed-words"]');
    expect(guessedWordsNode.length).toBe(1); 
  })

  test('correct number of guessed words', () => {
    const guessedWordNodes = wrapper.find('[data-test="guessed-word"]');
    expect(guessedWordNodes.length).toBe(guessedWords.length); 
  })
});
