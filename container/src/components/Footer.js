/**
 * Footer.js - Rodapé da aplicação
 *
 * Componente global do container com informações de copyright
 * e créditos do desenvolvedor.
 */

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <p className="mb-1">
        © 2024 Eccellenza nel Sapore. Todos os direitos reservados.
      </p>
      <p className="mb-0">Criado e desenvolvido por Felipe Augusto</p>
    </footer>
  );
}
