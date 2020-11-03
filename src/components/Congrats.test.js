// need to import React as we are using JSX
import React from 'react';

// Enzyme configurations
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import test helper function
import { findByTestAttribute } from '../../test/testUtils';

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

test('renders non-empty congrats message when `success` prop is true', () => {
  const wrapper = setup({ success: true })
  const message = findByTestAttribute(wrapper, 'congrats-message')
  // text length to be non-zero
  // using not method of jest for that
  expect(message.text().length).not.toBe(0) 
});

