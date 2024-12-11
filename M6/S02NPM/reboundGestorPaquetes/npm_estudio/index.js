var axios = require('axios');
var faker = require('faker');
var utils = require('./utils');
//
//console.log('-----------------------------------');
//console.log('Fake User Data Generator');
//console.log(faker.address.streetAddress());
//
//faker.locale = 'es';
//
//console.log('-----------------------------------');
//console.log(faker.address.streetAddress());
//
//console.log('-----------------------------------');
//console.log(utils.sumaDosEnteros(3, 4));
//console.log(utils.multiplicaDosEnteros(7, 3));
//
//console.log('-----------------------------------');
//
//console.log(utils.queDiaFue(3));
//console.log(utils.queDiaFue(3, 'ruso'));
//console.log(utils.queDiaFue(3, 'esperanto'));
//console.log('--------------+------------------------');

//const concatenateOrLength = require('./utils');
//const {useLength} = require('./config');

const str1 = 'Hello';
const str2 = 'World';
//acceder al modulo del objeto
const result = utils.concatenateOrLength(str1, str2);

console.log(`Resultado: ${result}`);

// index.js
const { concatenateOrLength } = require('./utils');  // Aquí se hace la desestructuración del objeto

const result2 = concatenateOrLength('Hola', 'Mundo');

console.log(`Resultado: ${result2}`);