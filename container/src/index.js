/**
 * index.js - Ponto de entrada do Webpack
 *
 * Importa o bootstrap.js de forma dinâmica (assíncrona).
 * Isso é obrigatório no Module Federation para que as dependências
 * compartilhadas (React, ReactDOM) sejam resolvidas antes da
 * aplicação iniciar. Sem o import dinâmico, ocorreria erro de
 * módulos não encontrados.
 */

import("./bootstrap");
