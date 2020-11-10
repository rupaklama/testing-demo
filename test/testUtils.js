// npm install --save-dev check-prop-types
// To check component prop types, we will use npm library ‘check-prop-types’.
// Instead of throwing a warning if the prop types are incorrect, it will actually return an error.
// That’s nice because instead of mocking ‘console.error’, we will just get the output of
// checkPropTypes method to see whether or not we get an error.
import checkPropTypes from 'check-prop-types';

// global configurations for all our tests
// helper function that we can import into all of our test files

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
