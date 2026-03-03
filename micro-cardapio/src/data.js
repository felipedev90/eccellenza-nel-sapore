/**
 * data.js - Base de dados estática dos pratos
 *
 * Array de objetos que representa o cardápio do restaurante.
 * Cada prato possui id, nome, descrição, preço e caminho da imagem.
 *
 * As imagens são servidas pelo próprio micro-cardapio (localhost:3001),
 * usando caminho absoluto para funcionar tanto isolado quanto
 * integrado no container.
 */

const pratos = [
  {
    id: 1,
    nome: "Lasagna alla Bolognese",
    descricao: "Camadas de massa artesanal com ragu de carne e bechamel",
    preco: 52.9,
    imagem: "http://localhost:3001/image/lasagna.webp",
  },
  {
    id: 2,
    nome: "Risotto ai Funghi Porcini",
    descricao: "Risoto cremoso com cogumelos porcini e parmesão",
    preco: 48.5,
    imagem: "http://localhost:3001/image/risotto.webp",
  },
  {
    id: 3,
    nome: "Bruschetta di Pomodoro",
    descricao: "Pão tostado com tomates frescos, manjericão e azeite",
    preco: 28.0,
    imagem: "http://localhost:3001/image/bruschetta.webp",
  },
  {
    id: 4,
    nome: "Spaghetti alla Carbonara",
    descricao: "Espaguete com guanciale, gema de ovo e pecorino romano",
    preco: 45.9,
    imagem: "http://localhost:3001/image/spaghetti.webp",
  },
  {
    id: 5,
    nome: "Ossobuco alla Milanese",
    descricao: "Pernil bovino cozido lentamente com gremolata e polenta",
    preco: 68.0,
    imagem: "http://localhost:3001/image/ossobuco.webp",
  },
];

export default pratos;
