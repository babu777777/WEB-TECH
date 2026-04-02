import React, { useState } from 'react';
import './App.css';

function App() {
  // useState Hook - Initialize counter with default value 0
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement function
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset function
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className="counter-container">
        <h1>Simple Counter</h1>
        <p className="subtitle">Exercise 3 - Using useState Hook</p>

        <div className="counter-display">
          <h2>{count}</h2>
        </div>

        <div className="buttons">
          <button onClick={decrement} className="btn decrement">
            - Decrement
          </button>

          <button onClick={reset} className="btn reset">
            Reset
          </button>

          <button onClick={increment} className="btn increment">
            Increment +
          </button>
        </div>

        <p className="info">Current Count: <strong>{count}</strong></p>
      </div>
    </div>
  );
}

export default App;