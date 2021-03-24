import React from "./react/React";
import ReactDOM from "./react/ReactDOM";

const element = (
  <div id="d">
    <h1>Hello, world!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
