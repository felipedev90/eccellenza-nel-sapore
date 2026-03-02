import React from "react";

export default function CardPrato({ prato, onAdicionar }) {
  return (
    <div>
      <h2>{prato.nome}</h2>
      <p>{prato.descricao}</p>
      <p>R$ {prato.preco.toFixed(2)}</p>
      <button onClick={onAdicionar}>Adicionar</button>
    </div>
  );
}
