const fs = require("fs/promises");

const filePath = "datos.txt";

const escribirArchivo = async (contenido) => {
    try {
        await fs.writeFile(filePath, contenido, "utf-8");
        console.log("Archivo escrito correctamente");
    } catch (error) {
        console.error("Hubo un error al escribir el archivo:", error.message);
    }
};

module.exports = escribirArchivo;
