import React from "react";

export default function Hero() {
  return (
    <section className="position-relative overflow-hidden">
      <img
        src="/image/hero_1536p.webp"
        alt="Hero"
        className="img-fluid w-100"
      />
      <div className="position-absolute top-50 start-50 translate-middle text-center text-white bg-dark bg-opacity-50 p-4 rounded w-75">
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
          }}
        >
          Desde 1987, unindo gerações com receitas artesanais e ingredientes
          selecionados. Cada prato carrega o sabor da verdadeira Itália.
        </p>
      </div>
    </section>
  );
}
