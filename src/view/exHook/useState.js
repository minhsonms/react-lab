import React, { useState } from 'react';
export function UseState() {
  const [count, setCount] = useState(0);
  return (
    <div>
        <h1>UseState</h1>
      <p>You clicked {count} times</p>
      <button  onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

