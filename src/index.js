import React from "react";
import ReactDOM from "react-dom";
const _ = require("lodash");

var name = "Anish";
ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <ul>
      <li> h1 </li>
      <li> h2 </li>
      <li> h3 </li>
    </ul>
    <ol>
      <li> h1 </li>
      <li> h2 </li>
      <li> h3 </li>
    </ol>
  </div>,
  document.getElementById("root")
);
