// creating separate file to access Redux Store in test files
import React from 'react';

// provider component to share data & connect to Redux Store
import { Provider } from 'react-redux';

// Using other function from Redux - createStore ()
// to put all Reducers into the Redux Store object & create Global State object
// applyMiddleware - to add redux thunk
import { createStore, applyMiddleware } from 'redux';

// redux promise to make async network request
import thunk from 'redux-thunk';

// redux dev tool
import { composeWithDevTools } from 'redux-devtools-extension';

// import root reducer
import rootReducer from './reducers';

// to add multiple different middlewares here in an array
// Also, making it Named export to use our middlewares in 
// our Test STORE - 'storeFactory' in testUtils.js 
export const middlewares = [thunk];

// This is a React Provider component & call with props object
// This component will wrap up other components

// declare initial Global state object 
const store = ({ children, initialState = {} }) => {

  // Wrap the children component with the Provider component.
  // pass in a single prop - store which takes in all the reducers
  return (
    <Provider
      store={createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middlewares))
      )}
    >
      {children}
    </Provider>
  );
};

export default store;


