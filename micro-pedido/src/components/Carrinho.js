import React from "react";

export default function Carrinho({ carrinho, onRemover }) {
  if (carrinho.length === 0) return null;

  return (
    <div className="container py-4">
      <h2 className="mb-3">Carrinho</h2>
      <ul className="list-group">
        {carrinho.map((prato, i) => (
          <li
            key={i}
            className="list-group-item d-flex align-items-center justify-content-between"
          >
            <div className="d-flex align-items-center">
              <img
                src={prato.imagem}
                alt={prato.nome}
                className="rounded"
                style={{ width: "60px", height: "60px", objectFit: "cover" }}
              />
              <div className="ms-3">
                <span className="fw-bold">{prato.nome}</span>
                <br />
                <span className="text-muted">R$ {prato.preco.toFixed(2)}</span>
              </div>
            </div>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => onRemover(i)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
