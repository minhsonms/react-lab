import React, { createContext, useState } from "react";
import LoadingComponent from "../component/loading/loadingComponent";

export const Loading = createContext();

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <Loading.Provider value={{ loading, setLoading }}>
      {children}
      {loading ? <LoadingComponent /> : null}
    </Loading.Provider>
  );
}
