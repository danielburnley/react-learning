import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Raven from "raven-js";

if (process.env.NODE_ENV === "production") {
  Raven.config(
    "https://02c1c7aaf89241c4a092f5aa787649a4@sentry.io/300388"
  ).install();
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
