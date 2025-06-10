import React, { useState } from 'react';

export function App(props) {
  const [count, setCount] = useState(0);
  const [textColor, setTextColor] = useState('black');

  const handleIncre = () => {
    setCount(count + 1);
    setTextColor('green');
  };

  const handleDecre = () => {
    if (count > 0) setCount(count - 1);
    setTextColor('red');
  };

  const handleReset = () => {
    setCount(0);
    setTextColor('blue');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: textColor }}>Count: {count}</h1>
      <button onClick={handleIncre}>➕ Increment</button>
      <button onClick={handleDecre}>➖ Decrement</button>
      <button onClick={handleReset}>🔄 Reset</button>
    </div>
  );
}

// Log to console
console.log('Hello console');
