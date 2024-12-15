const validarOpcionesEntrada = require("./modules/validarOpcionesEntrada");
const muestraInstrucciones = require("./modules/muestraInstrucciones");

const argumentosEntrada = process.argv.slice(2); // Obtener los argumentos de entrada
const opcion = argumentosEntrada[0];
const propiedad = argumentosEntrada[1];
const valor = argumentosEntrada[2];

if (argumentosEntrada.length === 0) {
    muestraInstrucciones();
    process.exit();
} else {
    validarOpcionesEntrada(opcion, propiedad, valor);
}
