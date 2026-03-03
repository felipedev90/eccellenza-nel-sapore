import React from "react";
import CardPrato from "./components/CardPrato";
import pratos from "./data";

export default function App() {
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
