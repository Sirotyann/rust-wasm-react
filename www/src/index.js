import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";

import("../wasm/astate").then((wasm) => {
  ReactDOM.render(<Main wasm={wasm}/>, document.getElementById("app"));
}).catch(e => console.error("Error importing `main.js`:", e));
