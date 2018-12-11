import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";

import("astate").then((wasm) => {
  console.log('wasm', wasm);
  ReactDOM.render(<Main wasm={wasm}/>, document.getElementById("app"));
}).catch(e => console.error("Error importing `main.js`:", e));

console.log("render dom at ", document.getElementById("app"));
