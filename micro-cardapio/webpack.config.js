/**
 * webpack.config.js - Configuração do Webpack para o Micro Cardápio (Remote)
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
    port: 3001, // Micro Cardápio roda na porta 3001
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Transpila arquivos .js e .jsx usando Babel
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Usa Babel para transpilar o código moderno de React
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    // Configura o Module Federation para expor o componente App como "MicroCardapio"
    new ModuleFederationPlugin({
      name: "micro_cardapio", // Nome do micro, usado para identificação

      // O nome do arquivo de manifesto que será gerado para expor os módulos
      filename: "remoteEntry.js",

      // Módulos que este micro expõe para outros micros (Container) importarem
      exposes: {
        "./MicroCardapio": "./src/App", // Expondo o componente App como "MicroCardapio"
      },

      // Dependências compartilhadas para evitar múltiplas versões de React
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
