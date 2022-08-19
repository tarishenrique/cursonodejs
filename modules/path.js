const path = require("path");

// Basename - Nome do arquivo atual
console.log(path.basename(__filename));

// Dirname - Nome do diretório atual
console.log(path.dirname(__dirname));

//Extensão do arquivo
console.log(path.extname(__filename));

// Criar objeto Path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__dirname, "test", "teste.html"));
