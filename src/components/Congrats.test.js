// need to import React as we are using JSX
import React from 'react';

// Prop types are a great way to validate the data types of all component's props
// & also great way to document a component
import PropTypes from 'prop-types';



// Enzyme configurations
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import test helper function
import { findByTestAttribute, checkProps } from '../../test/testUtils';

import Congrats from './Congrats';

// set up enzyme's react adapter
// new instance of adapter
Enzyme.configure({ adapter: new Adapter() });

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
const setup = (props={}) => { // props is an object with key/value pair
  // passing props into our component for testing 
  // { ...props} is passed on default props
  return shallow(<Congrats { ...props}/>) 
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

// since we are going to check prop types of all our components, lets
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
  // const propError = checkPropTypes(Congrats.propTypes, expectedProps, 'prop', Congrats.name )

  // since we are using checkPropTypes, we get return an error instead of warning
  // what we expect here for an error is to be 'undefined' because an error will
  // be undefined if prop passes all the test
  // expect(propError).toBeUndefined(); // jest method

  // running our expect statement in checkProps func with 
  // our component & expectedProps
  checkProps(Congrats, expectedProps)
})
