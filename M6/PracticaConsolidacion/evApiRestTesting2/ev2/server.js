const http = require("http");
const { parse } = require("url");
const { manejarPeticion } = require("./controllers/animeController");

const servidor = http.createServer(manejarPeticion).listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000/");
});

module.exports = { servidor };
