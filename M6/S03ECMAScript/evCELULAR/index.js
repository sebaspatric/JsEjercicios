//Importa el objeto celular en tu archivo index.js

const {celular, celularActualizado} = require('./celular');
const _= require('lodash');
// utilizando la desestructuración de objetos.

//const { marca, modelo, almacenamiento, sistemaOperativo, color, fechaAdquisicion } = celular;



//console.log(`Marca: ${marca}`);
console.log(celular);
//console.log(`Capacidad de batería: ${capacidadBateria} GB`);

/**
 Crea una función que muestre por pantalla la descripción de tu celular, utilizando
template literals, y las variables recogidas del objeto importado desde el archivo
celular.js.
 */

//const mostrarDescripcionCelular = () => {
//    console.log(`
//      Mi celular:
//      - Marca: ${marca}
//      - Modelo: ${modelo}
//      - Color: ${color}
//      - Almacenamiento: ${almacenamiento}
//      - Sistema Operativo: ${sistemaOperativo}
//      - Fecha de Adquisición: ${fechaAdquisicion}
//    `);
//  };
//  
//
//mostrarDescripcionCelular();



//Escribe un ejemplo de función de callback (puedes utilizar las revisadas en el primer y
//segundo CUE), pero esta vez utilizando la sintaxis de función de flecha


  const procesarCelular = (celularObjeto, callback) => {
    return callback(celularObjeto);
};

//callback para formatear la descripcion del celular
const mostrarDescripcion1 = (objeto) => {
    const { marca, modelo, almacenamiento, sistemaOperativo, color, fechaAdquisicion } = objeto;
    return `
    Marca: ${marca}
    Modelo: ${modelo}
    Almacemnamiento: ${almacenamiento}
    Sistema Operativo: ${sistemaOperativo}
    Color: ${color}
    Fecha de Adquisición: ${fechaAdquisicion}
    `;
};

// Callback para formatear la descripción del celular usando lodash
const mostrarDescripcion = (objeto) => {
    // Extrae propiedades dinámicamente
    const claves = ['marca', 'modelo', 'almacenamiento', 'sistemaOperativo', 'color', 'fechaAdquisicion'];
    const valores = _.pick(objeto, claves); // Solo selecciona las claves especificadas
  
    // Genera la descripción utilizando lodash para formatear
    return _.map(valores, (valor, clave) => `${_.capitalize(clave)}: ${valor}`).join('\n');
  };



console.log(`Descripcion del celular original:`);
console.log(procesarCelular(celular, mostrarDescripcion1));

// Uso con `celular`
console.log('Descripción del celular original lorash:');
console.log(procesarCelular(celular, mostrarDescripcion));

// celular actualizado
console.log(`Descripcion del celular actualizado:`);
console.log(procesarCelular(celularActualizado, mostrarDescripcion1));
// Uso con `celularActualizado`
console.log('Descripción del celular actualizado lorash:');
console.log(procesarCelular(celularActualizado, mostrarDescripcion));