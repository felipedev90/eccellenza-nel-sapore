import React from "react";

export default function CardPrato({ prato, onAdicionar }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={prato.imagem} alt={prato.nome} className="card-img-top" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{prato.nome}</h5>
        <p className="card-text text-muted">{prato.descricao}</p>
        <p className="fw-bold fs-5">R$ {prato.preco.toFixed(2)}</p>
        <button className="btn btn-warning mt-auto" onClick={onAdicionar}>
          Adicionar
        </button>
      </div>
    </div>
  );
}
