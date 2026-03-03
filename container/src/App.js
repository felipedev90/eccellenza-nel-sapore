/**
 * App.js - Componente principal do Container (Host)
 *
 * Este é o orquestrador da aplicação. Ele importa os micro frontends
 * (Cardápio e Pedido) de forma dinâmica usando React.lazy e os renderiza
 * junto com os componentes globais (Header, Hero, Footer).
 *
 * React.lazy: carrega os micros sob demanda em tempo de execução.
 * Suspense: exibe um fallback enquanto os micros estão sendo carregados.
 *
 * Os caminhos de import (ex: "micro_cardapio/MicroCardapio") são resolvidos
 * pelo Module Federation configurado no webpack.config.js.
 */

import React, { Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

// Importação dinâmica dos micro frontends via Module Federation
const MicroCardapio = React.lazy(() => import("micro_cardapio/MicroCardapio"));
const MicroPedido = React.lazy(() => import("micro_pedido/MicroPedido"));

export default function App() {
  return (
    <div>
      {/* COMPONENTES GLOBAIS DO CONTAINER */}
      <Header />
      <Hero />

      {/* MICRO FRONTENDS CARREGADOS DINAMICAMENTE */}
      <Suspense fallback={<div>Carregando...</div>}>
        <MicroCardapio />
        <MicroPedido />
      </Suspense>

      <Footer />
    </div>
  );
}
