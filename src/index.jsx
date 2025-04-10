import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/home";
import "./styles/global.css";
import "./styles/buttons/index.css";
import "./styles/inputs/index.css";
import "./styles/texts/index.css";
import "./styles/spacing/index.css";

const htmlRootNode = document.getElementById("root");

const reactRootNode = createRoot(
  htmlRootNode
);

reactRootNode.render(
  <StrictMode>
    <Home />
  </StrictMode>
);