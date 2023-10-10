/* @refresh reload */
import { render } from "solid-js/web";
import { lazy } from "solid-js";
import { Router, Routes, Route } from "@solidjs/router";

import "./index.css";
import App from "./App";
import 'animate.css';
import 'animate.css/animate.min.css';
const root = document.getElementById("root");

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  root
);
