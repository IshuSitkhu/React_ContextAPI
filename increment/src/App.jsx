import { useContext } from 'react';
import './App.css';
import Counter from './components/Counter';
import { CounterContext } from './context/Counter'; // ✅ Fixed import

function App() {
  const counterState = useContext(CounterContext); // ✅ Fixed

  return (
    <>
      <h1>Count is {counterState.count}</h1>
      <Counter />
    </>
  );
};

export default App;
