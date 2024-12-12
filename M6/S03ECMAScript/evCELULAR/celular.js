// crea un objetpo celular con clave valor y exportasr el objeto celular con node
//más un sexto ítem que contenga una fecha generada por moment.

const moment = require('moment');

// Definir los valores iniciales del celular

const celular = {
  marca: 'Samsung',
  modelo: 'Galaxy S21',
  color: 'Negro',
  precio: 899,
  almacenamiento: 128,
  memoriaRam: 6,
fechaAdquisicion: moment().format('YYYY-MM-DD'),
  capacidadBateria: 4000,
  pantalla: '6.8" OLED',
  memoriaInterna: 'MicroSD 128GB',
  camara: '64mb'

};


/*
Crea una copia del objeto en celular.js, y actualiza dos de sus propiedades utilizando el
spread operator
*/

const copiaCelular = {...celular };
copiaCelular.marca = 'Xiaomi';
copiaCelular.precio = 999;


// Crear una copia del objeto y actualizar propiedades
const celularActualizado = {
    ...celular,
    color: "Azul",
    almacenamiento: "256GB",
  };

//exportar el objeto

module.exports = { celular: celular, 
    copiaCelular: copiaCelular,
    celularActualizado: celularActualizado
  };


