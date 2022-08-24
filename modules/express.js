const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1> Hello World! </h1>");
});

app.get("/inicio", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1> HomePage </h1>");
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
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
