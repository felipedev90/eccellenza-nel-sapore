import React from "react";
import Header from "./components/Header";
import CardPrato from "./components/CardPrato";
import pratos from "./data";

export default function App() {
  function adicionarPrato(prato) {
    window.dispatchEvent(new CustomEvent("adicionarPrato", { detail: prato }));
  }

  return (
    <div>
      <Header />
      {pratos.map((prato) => (
        <CardPrato
          key={prato.id}
          prato={prato}
          onAdicionar={() => adicionarPrato(prato)}
        />
      ))}
    </div>
  );
}
