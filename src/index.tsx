import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Main from "./components/Main";

const container = document.getElementById("root");
console.log(document);
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
