var axios = require('axios');
var faker = require('faker');
var utils = require('./utils');

console.log('-----------------------------------');
console.log('Fake User Data Generator');
console.log(faker.address.streetAddress());

faker.locale = 'es';

console.log('-----------------------------------');
console.log(faker.address.streetAddress());

console.log('-----------------------------------');
console.log(utils.sumaDosEnteros(3, 4));
console.log(utils.multiplicaDosEnteros(7, 3));

console.log('-----------------------------------');