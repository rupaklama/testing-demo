import React, { useState } from 'react';
// import axios from 'axios';
import './App.css';


function Basic() {

  const [count, setCount] = useState(0);

  return (
    <div data-test="component-basic">
      <h1 data-test="counter-display">
        The counter is currently: <span data-test="count">{count}</span>
      </h1>
      <button
        data-test="increment-button"
        onClick={() => setCount( count + 1)}
      >Increment counter
      </button>
    </div>
  );
}

export default Basic;
