// need to import React as we are using JSX
import React from 'react';

// Enzyme configurations
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Basic from './Basic';

// set up enzyme's react adapter
// new instance of adapter
Enzyme.configure({ adapter: new Adapter() });

// In TDD testing, we always want Red Test before Green Test
// meaning we want our test to fail before they pass

// Setup to prevent DRY if there's a common code between multiple tests in a single file
// helper function to create shallow wrapper for our basic component
const setup = () => shallow(<Basic />)

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

// Test stages

// shows button
test('renders button', () => {
  // calling our helper func
  const wrapper = setup();

  // we want to find one button element with this particular data-test-attribute (test class name)
  // to make sure button element is being render
  const button = wrapper.find('[data-test="increment-button"]');
  expect(button.length).toBe(1);
});

// displays counter in h1 element
test('renders counter display', () => {
  const wrapper = setup();

  // we want to find one h1 element with this particular data-test-attribute
  // to make sure h1 element is being render
  const counterDisplay = wrapper.find('[data-test="counter-display"]');
  expect(counterDisplay.length).toBe(1);
});

// display starting value in span element inside of h1 element
test('counter starts at 0', () => {
  const wrapper = setup();

  // text method returns a string of the rendered text of the current render tree
  // text method to extract the text content of an element with this particular data-test-attribute
  const count = wrapper.find('[data-test="count"]').text();
  expect(count).toBe('0');
});


// find the display and see if click increments the counter display
test('clicking on button increments counter display', () => {
  const wrapper = setup();

  // first find the button to make sure it's being render
  const button = wrapper.find('[data-test="increment-button"]');

  // then, click the button

  // Simulate a 'click' event - .simulate(event,[mock]) of enzyme
  // simulate func takes first arg -  html name of the event / normal html DOM event,
  // Second arg is the mock event object that will be merged with the event object passed
  // to our event handlers - fake event object
  button.simulate('click'); // mocking button click - technically we clicked the button here

  // After clicking button above, testing if the number has been incremented to 1
  const count = wrapper.find('[data-test="count"]').text();
  expect(count).toBe('1')
});

// test function
// first arg - String description of the test, second arg - func with test logic
// reading this test as - test 'renders without crashing' for making meaningful description
test('renders without error', () => {
  const wrapper = setup();

  // using Shallow render method of enzyme to render only App component
  // wrapper - a shallow instance object we get from this is a wrapped version of App component
  // wrapper specifically means that this is a wrapped component that has some additional
  // functionalities loaded on top with Enzyme
  // const wrapper = shallow(<App />);

  // find method returns back an array which contains every elements/instances that matches
  // the selector - .find(selector)
  // although we only care about only one element - one data-test-attribute

  // data-test-attribute is an attribute syntax - [type="text"]) 
  // which is one of the valid CSS enzyme selector to find html elements to render
  // with Find selector 

  // using data-test-attribute on the component's html elements to be more specific 
  // using data-test-attribute to easy to find html elements & to render it
  // using expect statement to throw an error, attribute syntax ([href="foo"]

  // we want to find one div element with this particular data-test-attribute (test class name)
  // to make sure this div element is being render
  const basicComponent = wrapper.find('[data-test="component-basic"]'); // attrib/value
  expect(basicComponent.length).toBe(1);

  // debug() - Returns an HTML-like string of the wrapper for debugging purposes.
  // helpful if we are not sure what's going on with the test or tests are not passing
  // console.log(wrapper.debug())

  // expect statement or func, first arg is the Subject of our expectation,
  // it can be object, property, array or anything else that we want to inspect
  // toBeTurthy() is the Matcher statement is to clarify what property & how we want to
  // inspect the 'Subject'
  // expect(wrapper).toBeTruthy(); // to ensure return value is true, not falsy values
});
