import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// Ensure the root element exists and is of type HTMLElement
const rootElement = document.getElementById("root") as HTMLElement;

// Create a root element for React to render into
const root = ReactDOM.createRoot(rootElement);

// Render the App component wrapped with BrowserRouter inside React.StrictMode
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
