import React, { useContext } from 'react';
import { CounterContext } from '../context/Counter'; // ✅ Fixed import

const Counter = () => {
  const counterContext = useContext(CounterContext); // ✅ Fixed

  return (
    <div>
      <button onClick={() => counterContext.setCount(counterContext.count + 1)}>Increment</button>
      <button onClick={() => counterContext.setCount(counterContext.count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
