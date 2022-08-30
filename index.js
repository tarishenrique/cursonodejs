//const { Person } = require("./person");
const dotenv = require("dotenv");
const connString = process.env.MONGODB_CONNSTRING;
const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();

//require("./modules/path");
//require("./modules/fs");
//require("./modules/http");
require("./modules/express");

//const person = new Person("Taris");

//console.log(person.sayMyName());
//console.log(person.sayMyName2());
