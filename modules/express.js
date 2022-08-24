const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1> Hello World! </h1>");
});

app.get("/inicio", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1> HomePage </h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "Taris Henrique",
      email: "taris@trhinfo.com",
    },
    {
      name: "Raabe Castro",
      email: "raabe@trhinfo.com",
    },
  ];

  res.status(200).json(users);
});

const port = 8080;
app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));

/*
app.get('/', function(req, res) {
  res.send('Olá Mundo!');
});

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!');
});
*/
