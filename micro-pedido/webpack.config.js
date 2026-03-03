/**
 * webpack.config.js - Configuração do Webpack para o Micro Pedido (Remote)
 *
 * Este micro é um Remote na arquitetura Module Federation.
 * Ele expõe seu componente App para que o Container (Host)
 * possa importá-lo em tempo de execução.
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  devServer: {
    port: 3002, // Porta onde o micro será servido
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Transpila arquivos .js e .jsx usando Babel
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Usa babel-loader para transpilar o código
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    // Configura o Module Federation Plugin para expor o componente App
    new ModuleFederationPlugin({
      name: "micro_pedido", // Nome do micro, usado para identificação

      // O arquivo remoto que será gerado, contendo o código exposto
      filename: "remoteEntry.js",

      // O caminho do módulo que será exposto. O Container (Host) usará esse caminho para importar o componente.
      exposes: {
        "./MicroPedido": "./src/App", // Expondo o componente App como MicroPedido para ser importado pelo Container
      },

      // Compartilha as dependências React para evitar múltiplas versões no runtime
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
