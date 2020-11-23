import React from 'react';

// helper function with Redux TEST store
import { storeFactory } from '../../test/testUtils';

// shallow method
import { shallow } from 'enzyme';

import Input from './Input';

// NOTE: This test is for Connected Component - 'Input'
// which is connected to the Redux Store in our actual App
// Here, we are using our Redux Test Store to test if this
// component is successfully receiving default state in store
// like in actual app

// describe is just the way of grouping tests context
// so this help document our tests, somebody looking at our tests
// can know what we are testing in each sections & also help to document
// if anyone is looking for failure, it would tell in which one of these context
// the failure occurred in

// setup function for dry
// we need to connect our Redux TEST Store inside our setup for testing

// NOTE: It's important to create fresh Store for each tests for testing
// & we want to create a TEST STORE for testing that matches configuration of our actual Redux Store
// we need to connect to Redux Test Store inside our setup
// Passing 'store' as a prop to our Connect Component - input
const setup = (initialState = {}) => {
  // default initial state of our Test Redux Store
  const store = storeFactory(initialState); // passing default arg from above

  // dive meaning to get inside of children components
  // first Enzyme dive method returns/renders react child component of shallow wrapper
  // in our case, its going to return 'Input 'component wrapped with shallow wrapper below, now
  // to go one level deeper inside of Input component to access 'html' elements,
  // we need to dive one more time, add one more dive()

  // NOTE: Enzyme suggests that first connect components to App Redux store &
  // then use dive methods to access its elements
  // This is a better approach to do testing than non-connected components
  // since they are not connected to redux store & they use mock action creators
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
  // console.log(wrapper.debug())
};

// debugging to see how enzyme dive method works
// setup()

// input element renders when 'success' state is false
describe('render', () => {
  // we are going to have two test contexts
  // FIRST context
  describe('word has not been guessed', () => {
    // success: false
    // if there's a common code between multiple tests in a single file,
    // we use jest's beforeEach helper func to extract that common logic
    let wrapper;

    beforeEach(() => {
      // any logic we put here gets executed before all the tests below
      // initial state for our test contexts here
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    test('renders component without error', () => {
      // we want to find one div element with this particular data-test-attribute (test class name)
      // to make sure this div element is being render
      const component = wrapper.find('[data-test="component-input"]'); // attrib/value
      expect(component.length).toBe(1);
    });

    test('renders input box', () => {
      const inputBox = wrapper.find('[data-test="input-box"]');
      expect(inputBox.length).toBe(1);
    });

    test('renders submit button', () => {
      const submit = wrapper.find('[data-test="submit-button"]');
      expect(submit.length).toBe(1);
    });
  });

  // SECOND test context
  // when initial state is true
  describe('word has been guessed', () => {
   let wrapper;

    beforeEach(() => {
      // any logic we put here gets executed before all the tests below
      // initial state for our test contexts here
      const initialState = { success: true };
      wrapper = setup(initialState);
    });

    test('renders component without error', () => {
      // we want to find one div element with this particular data-test-attribute (test class name)
      // to make sure this div element is being render
      const component = wrapper.find('[data-test="component-input"]');
      expect(component.length).toBe(1);
    });

    test('does not render input box', () => {
      const inputBox = wrapper.find('[data-test="input-box"]')
      expect(inputBox.length).toBe(0)
    });

    test('does not render submit button', () => {
      const submit = wrapper.find('[data-test="submit-button"]');
      expect(submit.length).toBe(0);
    });
  });
});

// testing updating of the Redux Store State
