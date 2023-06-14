import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import Search from "./search";

const app = createRoot(document.getElementById("app"));
app.render(
  <App />
);

const search = createRoot(document.getElementById("search"));
search.render(
  <Search />
);
