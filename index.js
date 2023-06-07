import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

const app = createRoot(document.getElementById("app"));
app.render(
  <App />
);
