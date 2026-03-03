/**
 * App.js - Componente principal do Micro Pedido
 *
 * Gerencia o estado do carrinho de compras. Escuta o Custom Event
 * "adicionarPrato" disparado pelo Micro Cardápio e adiciona o
 * prato recebido ao estado local.
 *
 * A comunicação entre os micros é feita via window.addEventListener
 * (Custom Events), mantendo os micros desacoplados.
 */

import React, { useState, useEffect } from "react";
import Carrinho from "./components/Carrinho";

export default function App() {
  // Estado local para armazenar os pratos adicionados ao carrinho
  const [carrinho, setCarrinho] = useState([]);

  /**
   * useEffect: registra o listener do Custom Event quando o componente monta.
   * O cleanup (return) remove o listener quando o componente desmonta,
   * evitando memory leaks.
   */
  useEffect(() => {
    // Função para lidar com o evento "adicionarPrato" e atualizar o estado do carrinho
    function handleAdicionarPrato(event) {
      const prato = event.detail; // O prato enviado pelo Micro Cardápio é acessado via event.detail
      setCarrinho((prevCarrinho) => [...prevCarrinho, prato]);
    }
    // Registra o listener para o evento "adicionarPrato"
    window.addEventListener("adicionarPrato", handleAdicionarPrato);

    // Cleanup: remove o listener quando o componente desmonta
    return () => {
      window.removeEventListener("adicionarPrato", handleAdicionarPrato);
    };
  }, []); // O array vazio [] garante que o useEffect rode apenas uma vez, no mount

  /**
   * Remove um prato do carrinho pelo índice.
   * Usa índice em vez de id porque o mesmo prato pode ser adicionado
   * mais de uma vez.
   * @param {number} i - Índice do item a ser removido
   */
  function handleRemovePrato(i) {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.filter((_, index) => index !== i),
    );
  }

  return (
    <div>
      <Carrinho carrinho={carrinho} onRemover={handleRemovePrato} />
    </div>
  );
}
