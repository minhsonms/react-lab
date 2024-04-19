import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./global.css";
import { LoadingProvider } from "./context/loadingProvider";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <PrimeReactProvider>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </PrimeReactProvider>
  </BrowserRouter>
);
