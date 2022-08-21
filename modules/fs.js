const fs = require("fs");
const path = require("path");

// Criar uma pasta

fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }

  console.log("Pasta criada com sucesso!");
});

//Criar arquivo
fs.writeFile(
  path.join(__dirname, "/test", "teste.txt"),
  "Hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Arquivo criado com sucesso!");
  }
);
