/* becodeorg/react-pomodoro
 *
 * /src/app.js-main entry point
 *
 *code by Aly
 *
 *started at 11/05/2020
 */

console.log("Go !");
import React from "react";
import ReactDOM from "react-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import RootComponent from "./components/App";

ReactDOM.render(<RootComponent />, document.querySelector("#app"));
