import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SnackbarProvider } from "notistack";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </StrictMode>
  </BrowserRouter>
);
