import React, { useState, useEffect } from "react";
import { useLoading } from "../hook/useLoading";
import { Button } from "primereact/button";
import LoadingComponent from "../component/loading/loadingComponent";

const SimpleFunctionComponent = () => {
  const [count, setCount] = useState(0);
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    console.log("Function: Component rendered");
    return () => {
      console.log("Function: Component unmounted");
    };
  });

  const incrementCount = () => {
    setLoading(true);
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Function Component</h2>
      <LoadingComponent loading={loading} setLoading={setLoading} children={ <p>Count: {count}</p>} />
      <Button onClick={incrementCount} label="Increment" />
    </div>
  );
};

export default SimpleFunctionComponent;
