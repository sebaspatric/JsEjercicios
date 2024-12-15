const leerArchivo = require("./leerArchivo");
const escribirArchivo = require("./escribirArchivo");

const eliminarPropiedad = async (propiedad) => {
    try {
        let objetoDatos = (await leerArchivo()) || {};
        if (objetoDatos.hasOwnProperty(propiedad)) {
            delete objetoDatos[propiedad];
            const contenidoArchivo = JSON.stringify(objetoDatos, null, 2);
            await escribirArchivo(contenidoArchivo);
            console.log(`Propiedad "${propiedad}" eliminada correctamente.`);
        } else {
            console.log(`La propiedad "${propiedad}" no existe.`);
        }
    } catch (error) {
        console.error("Hubo un error al eliminar la propiedad:", error.message);
    }
};

module.exports = eliminarPropiedad;
