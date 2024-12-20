const fs = require("fs/promises");
const { v4: uuidv4 } = require("uuid");
const creaComic = async (nuevoComic) => {
  const archivoOriginal = await fs.readFile("comics.txt");
  const datosOriginales = JSON.parse(archivoOriginal);
  const id = uuidv4();
  datosOriginales[id] = nuevoComic;
  await fs.writeFile("comics.txt", JSON.stringify(datosOriginales, null, 2));
};
module.exports = { creaComic: creaComic };
