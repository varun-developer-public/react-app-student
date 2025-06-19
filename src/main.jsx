import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import Home from "./home";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);
