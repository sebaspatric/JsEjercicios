const leerArchivo = require("./leerArchivo");
const escribirDatos = require("./escribirDatos");
const eliminarPropiedad = require("./eliminarPropiedad");
const muestraInstrucciones = require("./muestraInstrucciones");

const validarOpcionesEntrada = async (opcion, propiedad, valor) => {
    switch (opcion) {
        case "leer":
            const datos = await leerArchivo();
            if (datos) {
                console.log("Datos en el archivo:");
                console.log(datos);
            }
            break;
        case "agregar":
            await escribirDatos(propiedad, valor);
            break;
        case "eliminar":
            await eliminarPropiedad(propiedad);
            break;
        default:
            console.error("Opción inválida. Debe ser leer, agregar, o eliminar.");
            muestraInstrucciones();
    }
};

module.exports = validarOpcionesEntrada;
