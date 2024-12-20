const fs = require("fs/promises");

const leerArchivo = async (archivo) => {
  try {
    const data = await fs.readFile(archivo, "utf8");
    return JSON.parse(data);
  } catch {
    return {};
  }
};

const escribirArchivo = async (archivo, contenido) => {
  try {
    await fs.writeFile(archivo, JSON.stringify(contenido, null, 2));
  } catch (error) {
    throw new Error("Error al escribir en el archivo.");
  }
};

module.exports = { leerArchivo, escribirArchivo };
