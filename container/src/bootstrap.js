/**
 * bootstrap.js - Inicialização da aplicação React
 *
 * Este arquivo é responsável por montar a aplicação React no DOM.
 * Ele é importado dinamicamente pelo index.js para permitir que o
 * Module Federation carregue as dependências compartilhadas (React, ReactDOM)
 * antes da aplicação iniciar.
 */

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Monta a aplicação React no elemento com id "root"
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
