import React, { Suspense } from "react";

const MicroCardapio = React.lazy(() => import("micro_cardapio/MicroCardapio"));
const MicroPedido = React.lazy(() => import("micro_pedido/MicroPedido"));

export default function App() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <MicroCardapio />
      <MicroPedido />
    </Suspense>
  );
}
