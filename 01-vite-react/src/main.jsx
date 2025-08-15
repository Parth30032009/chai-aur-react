import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit google"
);

createRoot(document.getElementById("root")).render(
  // anotherElement
  // reactElement
  <StrictMode>
    <App />
  </StrictMode>
);
