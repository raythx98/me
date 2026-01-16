import React from "react";
import { createRoot } from "react-dom/client";
import "./scss/custom.scss";
import "react-loading-skeleton/dist/skeleton.css";
import "devicon/devicon.min.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
