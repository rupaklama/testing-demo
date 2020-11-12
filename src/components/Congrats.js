import React from 'react';

// Prop types are a great way to validate the data types
// which will check props passed to your components against those definitions, 
// and warn in development if they don’t match.
// It's also great way to document a component
import PropTypes from 'prop-types';
const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test='component-congrats'>
        <span data-test='congrats-message'>
          Congratulations, You guessed the word!
        </span>
      </div>
    );
  } else {
    return (
      <div data-test="component-congrats"></div>
    )
  }
}

// giving a propTypes object to our component
// To run typechecking on the props for a component, you can assign the special propTypes property
// PropTypes exports a range of validators that can be used to make sure the data you receive is valid.
Congrats.propTypes = {
// it's going to list all of the propTypes that we expect & it's type that we want
// here, we want prop 'success' to be boolean
success: PropTypes.bool.isRequired // isRequired is must provide
}

export default Congrats;
