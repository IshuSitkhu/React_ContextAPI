import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CardProvider } from "./context/Card";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CardProvider>
      <App />
    </CardProvider>
  </React.StrictMode>
);
