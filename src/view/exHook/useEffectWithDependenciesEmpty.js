import React, { useState, useEffect } from 'react';

function UseEffectDependenciesEmpty() {
  const [count, setCount] = useState(0);

  // useEffect với mảng dependencies rỗng
  useEffect(() => {
    console.log('useEffect ran.');
  }, []);

  return (
    <div>
      <h1>useEffect có dependencies rỗng</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default UseEffectDependenciesEmpty;