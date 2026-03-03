/**
 * App.js - Componente principal do Micro Cardápio
 *
 * Responsável por exibir a lista de pratos disponíveis.
 * Quando o usuário clica em "Adicionar", dispara um Custom Event
 * no window para comunicar com o Micro Pedido.
 *
 * Este micro não gerencia o carrinho — apenas notifica que um
 * prato foi selecionado, mantendo o desacoplamento entre micros.
 */

import React from "react";
import CardPrato from "./components/CardPrato";
import pratos from "./data";

export default function App() {
  /**
   * Dispara um Custom Event global para comunicar a adição
   * de um prato ao pedido. O Micro Pedido escuta esse evento.
   * @param {Object} prato - Objeto com dados do prato (id, nome, descricao, preco, imagem)
   */

  function adicionarPrato(prato) {
    window.dispatchEvent(new CustomEvent("adicionarPrato", { detail: prato }));
  }

  return (
    <div className="container py-4">
      <h2 style={{ fontFamily: "'Playfair Display', serif" }}>Cardápio</h2>
      <div className="row g-4">
        {pratos.map((prato) => (
          <div className="col-12 col-md-6 col-lg-4" key={prato.id}>
            <CardPrato
              prato={prato}
              onAdicionar={() => adicionarPrato(prato)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
