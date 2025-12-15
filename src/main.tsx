import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Ambil root element secara aman
const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element not found");

const root = ReactDOM.createRoot(rootEl);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
