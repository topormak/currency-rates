import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// @ts-ignore
const initialState = window.__STATE__;

ReactDOM.hydrate(<App {...initialState} />, document.getElementById("root"));