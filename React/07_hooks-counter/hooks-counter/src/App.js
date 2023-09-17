import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count >= 3) {
      setCount(count => count = 0);
    } else {
      setCount(count => count + 1);
    }
  };

  const decrement = () => {
    if (count <= -3) {
      setCount(count => count = 0);
    } else {
      setCount(count => count - 1);
    }
  };

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => { increment() }}>Increment</button>
      <button onClick={() => { decrement() }}>Decrement</button>
    </div>
  );
}

export default App;
