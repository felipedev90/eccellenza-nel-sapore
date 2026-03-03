/**
 * Header.js - Componente de cabeçalho da aplicação
 *
 * Componente global do container que exibe o nome do restaurante
 * e a tagline. Fica fixo no topo da página (sticky-top).
 *
 * Layout responsivo:
 * - Mobile: textos centralizados, empilhados
 * - Desktop (lg+): nome à esquerda, tagline à direita
 */

import React from "react";

export default function Header() {
  return (
    <header className="sticky-top bg-warning">
      <div className="container">
        <div className="row align-items-center py-3">
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <h1 style={{ fontFamily: "'Playfair Display', serif" }}>
              Eccellenza nel Sapore
            </h1>
          </div>
          <div className="col-12 col-lg-6 col-12 col-lg-6 text-center text-lg-end">
            <span style={{ fontFamily: "'Playfair Display', serif" }}>
              Autêntica culinária italiana em cada prato
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
