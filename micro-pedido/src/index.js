/**
 * index.js - Ponto de entrada do Webpack
 *
 * Import dinâmico obrigatório para o Module Federation.
 * Permite que as dependências compartilhadas sejam carregadas
 * antes da inicialização da aplicação.
 */

import("./bootstrap");
