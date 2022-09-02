import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PokemonProvider } from "./context/pokemon.context";
import { StyledEngineProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonProvider>
        <StyledEngineProvider injectFirst>
          {/* for tailwind css to work */}

          <App />
        </StyledEngineProvider>
      </PokemonProvider>
    </BrowserRouter>
  </React.StrictMode>
);
