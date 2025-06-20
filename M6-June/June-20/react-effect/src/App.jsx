import React, { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);


  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🕒 {time.toLocaleTimeString()}</h1>
    </div>
    </>
  )
}

export default App
