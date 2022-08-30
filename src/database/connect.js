const mongoose = require("mongoose");
const connString = process.env.MONGODB_CONNSTRING;

const connectToDatabase = async () => {
  await mongoose.connect(`${process.env.MONGODB_CONNSTRING}`, (error) => {
    if (error) {
      return console.log("Ocorreu um erro ao se conectar ao DB: ", error);
    }

    return console.log("Conexão ao DB realizada com sucesso!");
  });
};

module.exports = connectToDatabase;
