import React, { Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const MicroCardapio = React.lazy(() => import("micro_cardapio/MicroCardapio"));
const MicroPedido = React.lazy(() => import("micro_pedido/MicroPedido"));

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Suspense fallback={<div>Carregando...</div>}>
        <MicroCardapio />
        <MicroPedido />
      </Suspense>
      <Footer />
    </div>
  );
}
