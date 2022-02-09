import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UseEffect from "./UseEffect";
import CleanUp from "./CleanUp";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <UseEffect />
    <CleanUp />
  </React.StrictMode>,
  document.getElementById("root")
);
