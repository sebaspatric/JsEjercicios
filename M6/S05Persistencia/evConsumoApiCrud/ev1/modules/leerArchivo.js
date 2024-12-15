const fs = require("fs/promises");

const filePath = "datos.txt";

const leerArchivo = async () => {
    try {
        const contenidoArchivo = await fs.readFile(filePath, "utf-8");
        if (contenidoArchivo.length === 0) {
            console.log("El archivo está vacío.");
            return null;
        }
        return JSON.parse(contenidoArchivo);
    } catch (error) {
        console.error("Error al leer archivo:", error.message);
        return null;
    }
};

module.exports = leerArchivo;
