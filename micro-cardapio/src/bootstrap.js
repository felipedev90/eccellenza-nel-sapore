/**
 * bootstrap.js - Inicialização da aplicação React
 *
 * Monta a aplicação React na div#root do DOM.
 * Separado do index.js para permitir o import dinâmico
 * necessário para o Module Federation funcionar.
 */

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
