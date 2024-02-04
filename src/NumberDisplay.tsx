
import React, { useState } from 'react';

function NumberDisplay() {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const decrement = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div>
      <p>Number: {number}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default NumberDisplay;
