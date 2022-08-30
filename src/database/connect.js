const mongoose = require("mongoose");
const connString = process.env.MONGODB_CONNSTRING;

const connectToDatabase = async () => {
  await mongoose.connect(
    "mongodb://mongoadmin:secret@localhost:27017/?authMechanism=DEFAULT",
    (error) => {
      if (error) {
        return console.log("Ocorreu um erro ao se conectar ao DB: ", error);
      }

      return console.log("Conexão ao DB realizada com sucesso!");
    }
  );
};
/*
const connectToDatabase = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/someRandomDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`CONNECTED TO MONGO!`);
    })
    .catch((err) => {
      console.log(`OH NO! MONGO CONNECTION ERROR!`);
      console.log(err);
    });
};


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:<password>@cursonodejsdicasparadev.i9aj8dt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/

module.exports = connectToDatabase;
