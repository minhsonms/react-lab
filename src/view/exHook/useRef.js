import React, { useRef, useEffect } from 'react';

function UseRef() {
  const countRef = useRef(0);

  useEffect(() => {
    console.log('Component re-rendered');
  });

  const incrementCount = () => {
    countRef.current = countRef.current + 1;
    console.log(countRef.current)
  };

  return (
    <div>
        <h1>useRef</h1>
      <p>Count (ref): {countRef.current}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default UseRef;
