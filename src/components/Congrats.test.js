// need to import React as we are using JSX
import React from 'react';

// shallow render method 
import { shallow } from 'enzyme';

// npm install --save-dev check-prop-types
// To check component prop types, we will use npm library ‘check-prop-types’.
// Instead of throwing a warning if the prop types are incorrect, it will actually return an error.
// That’s nice because instead of mocking ‘console.error’, we will just get the output of
// checkPropTypes method to see whether or not we get an error.
import checkPropTypes from 'check-prop-types';

// import test helper function
import { findByTestAttribute, checkProps } from '../../test/testUtils';

import Congrats from './Congrats';

// In TDD testing, we always want Red Test before Green Test
// meaning we want our test to fail before they pass

// using Shallow render method of enzyme to render only parent component
// wrapper - a shallow instance object we get from this is a wrapped version of our parent component
// wrapper specifically means that this is a wrapped component that has some additional
// functionalities loaded on top with Enzyme
// const wrapper = shallow(<Congrats />);

// Setup to prevent DRY if there's a common code between multiple tests in a single file
// NOTE: Props is pass into nested components from parent, so, doing Props testing here
// passing default props of an object to our component for testing

// default props for all the components for DRY code
// every component needs t have default props when doing PropsTypes Testing
const defaultProps = { success: false }
const setup = (props={}) => { // props is an object with key/value pair
  // pass in defaultProps
  const setupProps = { ...defaultProps, ...props} // ...props is component props

  // passing props into our component for testing 
  return shallow(<Congrats { ...setupProps}/>) 
}

// Test stages

test('renders without error', () => {
  const wrapper = setup(); // shallow wrapper component
  const component = findByTestAttribute(wrapper, 'component-congrats')
  expect(component.length).toBe(1)
});

test('renders no text when `success` prop is false', () => {
  // passing props into our component for testing
  const wrapper = setup({ success: false })
  const component = findByTestAttribute(wrapper, 'component-congrats')

  // text method returns a string of the rendered text of the current render tree
  // text method to extract the text of an element from our component with
  // specific to that particular data-test-attribute - 'component-congrats'
  expect(component.text()).toBe('')
});

test('renders congrats message when `success` prop is true', () => {
  const wrapper = setup({ success: true })
  const message = findByTestAttribute(wrapper, 'congrats-message')
  // text length to be non-zero
  // using not method of jest for that
  expect(message.text().length).not.toBe(0) 
});

// since we are going to check props types passed to our components, lets
// add it on our helper function - testUtils.js 
// propTypes checking
test('does not throw warning with expected props', () => {
  // checking to see if there anything wrong with our prop type - { success: false}
  // if no prop type defined, not going to find anything wrong with it
  const expectedProps = { success: false}
  // will see what kind a error we get, if we run checkPropTypes with that prop
  // pass .propTypes into our component & props that we want to test, 
  // then tell it we are testing properties 'prop'
  // then you give name of the component - Congrats.name
  const propError = checkPropTypes(Congrats.propTypes, expectedProps, 'prop', Congrats.name )

  // since we are using checkPropTypes, we get return an error instead of warning
  // what we expect here for an error is to be 'undefined' because an error will
  // be undefined if prop passes all the test
  expect(propError).toBeUndefined(); // jest method

  // running our expect statement in checkProps helper func with 
  // our component & expectedProps in testUtils.js file
  // checkProps(Congrats, expectedProps)
})
