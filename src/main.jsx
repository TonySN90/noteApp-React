import React from "react";
import ReactDOM from "react-dom/client";
import NoteApp from "./App.jsx";
import "./scss/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>
);
