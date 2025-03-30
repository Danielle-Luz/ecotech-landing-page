import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/home";

const htmlRootNode = document.getElementById("root");

const reactRootNode = createRoot(
  htmlRootNode
);

reactRootNode.render(
  <StrictMode>
    <Home />
  </StrictMode>
);