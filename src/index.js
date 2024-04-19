import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./context/contextProvider";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { LoadingProvider } from "./context/loadingProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoadingProvider>
      <ContextProvider>
        <PrimeReactProvider>
          <App />
        </PrimeReactProvider>
      </ContextProvider>
    </LoadingProvider>
  </React.StrictMode>
);


