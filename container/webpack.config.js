/**
 * webpack.config.js - Configuração do Webpack para o Container (Host)
 *
 * O Container é o Host na arquitetura Module Federation.
 * Ele consome os micro frontends (Remotes) que estão rodando
 * em servidores separados.
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  // Ambiente de desenvolvimento (sem minificação, com source maps)
  mode: "development",

  // Configuração do servidor de desenvolvimento
  devServer: {
    port: 3000, // Container roda na porta 3000
    historyApiFallback: true, // Redireciona todas as requisições para index.html
  },

  // Regras de como o webpack deve processar os arquivos
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Arquivos .js ou .jsx
        exclude: /node_modules/, // Ignora a pasta node_modules
        use: {
          loader: "babel-loader", // Usa o Babel para transpilar o código
          options: {
            presets: [
              "@babel/preset-env", // Converte JS moderno para compatível com navegadores antigos
              "@babel/preset-react", // Converte JSX para JavaScript padrão
            ],
          },
        },
      },
    ],
  },
  plugins: [
    // Module Federation Plugin para configurar o Container como Host
    new ModuleFederationPlugin({
      name: "container",

      // Remotes: Define os micro frontends que o Container irá consumir
      // Sintaxe: [nome do remote]@[URL do remoteEntry.js]
      remotes: {
        micro_cardapio: "micro_cardapio@http://localhost:3001/remoteEntry.js",
        micro_pedido: "micro_pedido@http://localhost:3002/remoteEntry.js",
      },

      // Dependências compartilhadas: React e ReactDOM são compartilhados entre o Container e os Remotes
      // Singleton: true garante que apenas uma versão de cada biblioteca seja carregada, evitando conflitos
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),

    // Gera o HTML e injeta os bundles gerados pelo Webpack
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
