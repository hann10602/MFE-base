import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "./themes";
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
