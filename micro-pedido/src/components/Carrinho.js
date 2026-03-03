import React from "react";

export default function Carrinho({ carrinho, onRemover }) {
  return (
    <div>
      <h2>{carrinho.length > 0 ? "Carrinho:" : ""}</h2>
      <ul>
        {carrinho.map((prato, i) => (
          <li key={i}>
            <img src={prato.imagem} alt={prato.nome} />
            {prato.nome} - R$ {prato.preco.toFixed(2)}
            <button
              onClick={() => {
                onRemover(i);
              }}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
