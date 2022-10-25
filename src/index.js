import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppMobile from "./AppMobile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {window.innerWidth < 500 ? <AppMobile /> : <App />}
  </React.StrictMode>
);
