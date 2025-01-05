// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Import from react-dom/client for React 18
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./components/store";  // Correct way to import the default export
import "./styles/app.css";

// Create a root element and render the app inside it
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
