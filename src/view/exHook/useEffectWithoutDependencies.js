import React, { useState, useEffect } from "react";

function UseEffectWithoutDependencies() {
  const [count, setCount] = useState(0);

  // useEffect không có dependencies
  useEffect(() => {
    console.log("useEffect ran.");
  });

  return (
    <div>
      <h1>useEffect không có dependencies</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default UseEffectWithoutDependencies;
