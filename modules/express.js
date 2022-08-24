const { response } = require("express");
const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use((require, response, next) => {
  console.log(`Request Type: ${require.method}`);
  console.log(`Content Type: ${require.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  next();
});

app.get("/views/users", async (require, response) => {
  const users = await UserModel.find({});

  response.render("index", { users: users });
});

app.get("/", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1> Hello World! </h1>");
});

//Encontrar todos os Usuários
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//Localizar Usuário por ID
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await UserModel.findById(id);

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//Criar Usuário
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Atualizar usuário por ID
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const users = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Deletar Usuário
app.delete("/users/:id", async (require, response) => {
  try {
    const id = require.params.id;
    const user = await UserModel.findByIdAndRemove(id);

    response.status(200).json(user);
  } catch (error) {
    response.status(500).send(error.message);
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
