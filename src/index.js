import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import React from "react";
import { ServiceProviderProvider } from "context/ServiceProviderContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
 <React.StrictMode>
    <BrowserRouter>
      < ServiceProviderProvider>
        <App />
      </ ServiceProviderProvider>
    </BrowserRouter>
  </React.StrictMode>
);
