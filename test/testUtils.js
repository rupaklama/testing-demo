
// npm install --save-dev check-prop-types
// To check component prop types, we will use npm library ‘check-prop-types’.
// Instead of throwing a warning if the prop types are incorrect, it will actually return an error.
// That’s nice because instead of mocking ‘console.error’, we will just get the output of
// checkPropTypes method to see whether or not we get an error.
import checkPropTypes from 'check-prop-types';

// global configurations for all our tests
// helper function that we can import into all of our test files

// we need to create Redux Test Store inside our setup func for testing
// to mock up data flow from redux store to connected components 
import { createStore } from 'redux';

// NOTE: It's important to create fresh Store for each tests for testing
// using 'storeFactory' test utility - helper func below

import rootReducer from '../src/reducers';
// we want to make sure we are using same Reducer as our actual App
// If we add Reducer to our App, it will add it to our 'storeFactory' as well
// When we add middleware to our store - Redux Thunk, we will share with our 'storeFactory' also
export const storeFactory = (initialState) => { // param - to specify initial state in our test store
  // we want to create a TEST STORE for testing that matches configuration of our actual Redux Store
  // which uses Reducers from our actual App
  return createStore(rootReducer, initialState);
}
// NOTE: This 'storeFactory' helper func will be added as a PROP to our connected components
// in our test files which allow connected components to connect to our TEST redux store above

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
export const findByTestAttribute = (wrapper, value) => {
  // takes wrapper & value
  return wrapper.find(`[data-test="${value}"]`); // attrib - CSS enzyme selector/value - name
};

// generic test to use in all our components
// we will ask it for 'props & component'
export const checkProps = (component, conformingProps) => {
  // component & props
  // we gather an error that checkPropTypes returns
  // propTypes - we wil pass in a prop type
  // conformingProps - props that we want to check
  // then tell it we are testing properties 'prop'
  // then you give name of the component - Congrats.name
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );

  // since we are using checkPropTypes, we get return an error instead of warning
  // what we expect here for an error is to be 'undefined' because an error will
  // be undefined if prop passes all the test
  expect(propError).toBeUndefined(); // jest method
};
