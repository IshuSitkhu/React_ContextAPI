import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CounterProvider } from "./context/Counter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CounterProvider>
    <App />
  </CounterProvider>
);
