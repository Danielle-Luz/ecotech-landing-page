import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const htmlRootNode = document.getElementById("root");

const reactRootNode = createRoot(
  htmlRootNode
);

reactRootNode.render(
  <StrictMode>
  </StrictMode>
);