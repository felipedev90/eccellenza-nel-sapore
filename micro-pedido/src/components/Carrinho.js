import React from "react";

export default function Carrinho({ carrinho, onRemover }) {
  return (
    <div>
      <h2>Carrinho:</h2>
      <ul>
        {carrinho.map((prato, i) => (
          <li key={i}>
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
