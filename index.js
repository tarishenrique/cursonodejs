const { Person } = require("./person");

require("./modules/path");
require("./modules/fs");

const person = new Person("Taris");

console.log(person.sayMyName());
console.log(person.sayMyName2());
