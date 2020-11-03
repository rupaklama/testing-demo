import React from 'react';

// Enzyme configurations
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../Basic';

// set up enzyme's react adapter
// new instance of adapter
Enzyme.configure({ adapter: new Adapter() });

// In TDD testing, we always want Red Test before Green Test
// meaning we want our test to fail before they pass

// if there's a common code between multiple tests in a single file,
// we use jest's beforeEach helper func to extract that common logic
let wrapper; // let to reassigned new values to this variable several times during test
beforeEach(() => {
  // any logic we put here gets executed before all the tests below
  wrapper = shallow(<App />);
});

// Test stages

test('renders without error', () => {})
