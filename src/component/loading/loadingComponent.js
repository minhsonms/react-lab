import React, { useEffect } from "react";
import { ProgressSpinner } from "primereact/progressspinner";

const LoadingComponent = ({ loading, setLoading, children }) => {
 

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <>
      {loading ? (
        <ProgressSpinner
          style={{ width: "50px", height: "50px" }}
          strokeWidth="8"
          fill="var(--surface-ground)"
          animationDuration=".5s"
        />
      ) : (
        children
      )}
    </>
  );
};

export default LoadingComponent;
