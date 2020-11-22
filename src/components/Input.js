import React from 'react';
import { connect } from 'react-redux';
const Input = ({ success}) => {
  // console.log(success)
  return (
    <div data-test="component-input">
      { success ? null : (
        <form className='form-inline'>
          <input className="mb-2 mx-sm-3" data-test="input-box" type="text" placeholder="enter guess" />

          <button data-test="submit-button" className="btn btn-primary mb-2">Submit</button>
        </form>
      )}
    </div>
  )
}

// mapStateToProps function passes global state data from Redux Store into react components 
// in order to do so, pass mapStateToProps to Connect function
// mapStateToProps, meaning - pass in the data store in Redux Test Store to this component as PROPS
const mapStateToProps = ({ success }) => { // destructuring state props
  return { success: success} // key/value 
}

// Even though if there's no state/data, still need to pass in first arg to the connect func
// first arg is always mapStateToProps func, pass null instead if no state/data
// Second arg is the Action Creator object in connect(mapStateToProps, action)

export default connect(mapStateToProps)(Input);
// To access to the provider, use connect() & wrap the component with ()
// Instance of Connect component connects to the Provider component to access Redux store
// Connect component handles Action Creators which is pass as props into this react component
