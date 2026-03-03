import React, { useState, useEffect } from "react";
import Carrinho from "./components/Carrinho";

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    function handleAdicionarPrato(event) {
      const prato = event.detail;
      setCarrinho((prevCarrinho) => [...prevCarrinho, prato]);
    }
    window.addEventListener("adicionarPrato", handleAdicionarPrato);

    return () => {
      window.removeEventListener("adicionarPrato", handleAdicionarPrato);
    };
  }, []);

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
