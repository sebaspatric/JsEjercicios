const muestraInstrucciones = () => {
    console.error("Debe especificar una opción válida: leer, agregar, o eliminar.");
    console.log("Ejemplos:");
    console.log("node programa.js leer");
    console.log("node programa.js agregar nombre John");
    console.log("node programa.js eliminar nombre");
};

module.exports = muestraInstrucciones;
