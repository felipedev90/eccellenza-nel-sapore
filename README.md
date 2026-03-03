# Eccellenza nel Sapore - Micro Frontends

Aplicação web de um restaurante italiano construída com arquitetura de **Micro Frontends**, utilizando **React** e **Webpack Module Federation**.

O sistema é dividido em três aplicações independentes que se comunicam em tempo de execução, simulando um cenário real de desenvolvimento distribuído e escalável.

## Arquitetura

```
eccellenza-nel-sapore/
├── container/          → Host (porta 3000) - Orquestra os micros
├── micro-cardapio/     → Remote (porta 3001) - Lista de pratos
└── micro-pedido/       → Remote (porta 3002) - Carrinho de compras
```

### Diagrama

```
┌────────────────────────────────────────────────┐
│                 CONTAINER (Host)               │
│                 localhost:3000                 │
│                                                │
│  ┌─────────────┐         ┌─────────────┐       │
│  │    MICRO    │  Event  │    MICRO    │       │
│  │  CARDÁPIO   │ ──────> │   PEDIDO    │       │
│  │  (Remote)   │         │  (Remote)   │       │
│  │  :3001      │         │  :3002      │       │
│  └─────────────┘         └─────────────┘       │
│                                                │
│  Shared: React, ReactDOM (singleton)           │
└────────────────────────────────────────────────┘
```

## Tecnologias

- **React 19** - Biblioteca de UI
- **Webpack 5** - Bundler e Module Federation
- **Babel** - Transpilação de JSX e JS moderno
- **Bootstrap 5** - Estilização (via CDN)

## Como rodar

### Pré-requisitos

- Node.js instalado
- npm instalado

### 1. Instalar dependências de cada micro

```bash
cd micro-cardapio
npm install

cd ../micro-pedido
npm install

cd ../container
npm install
```

### 2. Subir os servidores

**Importante:** suba os micros (Remotes) antes do container (Host).

Abra **3 terminais** separados:

**Terminal 1 - Micro Cardápio:**

```bash
cd micro-cardapio
npm start
# Rodando em http://localhost:3001
```

**Terminal 2 - Micro Pedido:**

```bash
cd micro-pedido
npm start
# Rodando em http://localhost:3002
```

**Terminal 3 - Container:**

```bash
cd container
npm start
# Rodando em http://localhost:3000
```

### 3. Acessar a aplicação

- **Aplicação completa:** http://localhost:3000
- **Micro Cardápio (isolado):** http://localhost:3001
- **Micro Pedido (isolado):** http://localhost:3002

## Comunicação entre os micros

A comunicação é feita via **Custom Events** no `window`, mantendo os micros completamente desacoplados.

### Fluxo

1. O usuário clica em **"Adicionar"** em um prato no Micro Cardápio
2. O Micro Cardápio dispara um evento global:
   ```js
   window.dispatchEvent(new CustomEvent("adicionarPrato", { detail: prato }));
   ```
3. O Micro Pedido escuta esse evento com `window.addEventListener`:
   ```js
   window.addEventListener("adicionarPrato", (event) => {
     const prato = event.detail;
     // Adiciona ao estado do carrinho
   });
   ```
4. O prato aparece no carrinho

### Por que Custom Events?

- Os micros não precisam conhecer um ao outro
- Não há dependência de estado compartilhado
- Fácil de testar cada micro isoladamente
- O contrato entre eles é apenas o **nome do evento** e a **estrutura dos dados**

## Module Federation

O Webpack Module Federation permite que os micros **exponham** e **consumam** módulos em tempo de execução.

### Remotes (quem expõe)

Cada micro expõe seu componente `App` através do `remoteEntry.js`:

```js
// webpack.config.js do micro-cardapio
new ModuleFederationPlugin({
  name: "micro_cardapio",
  filename: "remoteEntry.js",
  exposes: {
    "./MicroCardapio": "./src/App",
  },
});
```

### Host (quem consome)

O container importa os micros dinamicamente:

```js
// webpack.config.js do container
new ModuleFederationPlugin({
  name: "container",
  remotes: {
    micro_cardapio: "micro_cardapio@http://localhost:3001/remoteEntry.js",
    micro_pedido: "micro_pedido@http://localhost:3002/remoteEntry.js",
  },
});
```

### Dependências compartilhadas

React e ReactDOM são configurados como `singleton: true` em todos os micros para garantir que apenas uma instância exista na página, evitando duplicação e bugs.

## Estrutura de componentes

### Container

| Componente  | Responsabilidade                              |
| ----------- | --------------------------------------------- |
| `App.js`    | Orquestra os micros com React.lazy + Suspense |
| `Header.js` | Cabeçalho com nome do restaurante             |
| `Hero.js`   | Seção hero com imagem e texto                 |
| `Footer.js` | Rodapé com créditos                           |

### Micro Cardápio

| Componente     | Responsabilidade                            |
| -------------- | ------------------------------------------- |
| `App.js`       | Lista os pratos e dispara eventos de adição |
| `CardPrato.js` | Card reutilizável de cada prato             |
| `data.js`      | Base de dados estática dos pratos           |

### Micro Pedido

| Componente    | Responsabilidade                                |
| ------------- | ----------------------------------------------- |
| `App.js`      | Gerencia o estado do carrinho e escuta eventos  |
| `Carrinho.js` | Exibe os itens adicionados com opção de remover |

## O que aprendi

- Configurar **Webpack e Babel do zero**, sem depender do Create React App, entendendo o papel de cada dependência (loaders, plugins, presets)
- O conceito de **Micro Frontends**: dividir o frontend em aplicações independentes, cada uma com sua responsabilidade, build e deploy próprios
- Configurar o **Webpack Module Federation** com os papéis de Host (Container) e Remote (Micros), expondo e consumindo módulos em tempo de execução
- Usar **React.lazy e Suspense** para importação dinâmica de componentes remotos
- Implementar comunicação desacoplada entre micros usando **Custom Events** no window (dispatchEvent + addEventListener)
- A importância do **import dinâmico** (`import()`) no ponto de entrada para que o Module Federation resolva as dependências compartilhadas antes da inicialização
- Compartilhar dependências como React e ReactDOM com **singleton: true** para evitar duplicação e bugs
- Que cada micro deve **funcionar isoladamente** antes de ser integrado ao container
- Servir **assets estáticos** (imagens) a partir do micro de origem, usando caminhos absolutos para funcionar dentro do container
- Aplicar **Bootstrap via CDN** no React, respeitando as diferenças de sintaxe (className em vez de class)

## Autor

Desenvolvido por **Felipe Augusto**
