const leerArchivo = require("./leerArchivo");
const escribirArchivo = require("./escribirArchivo");

const escribirDatos = async (propiedad, valor) => {
    try {
        let objetoDatos = (await leerArchivo()) || {};
        const nuevoObjeto = { ...objetoDatos, [propiedad]: valor };
        const contenidoArchivo = JSON.stringify(nuevoObjeto, null, 2);
        await escribirArchivo(contenidoArchivo);
        console.log("Archivo actualizado correctamente");
    } catch (error) {
        console.error("Hubo un error al actualizar los datos:", error.message);
    }
};

module.exports = escribirDatos;
