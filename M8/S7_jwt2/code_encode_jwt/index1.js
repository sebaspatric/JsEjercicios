// importamos el modulo
const sign = require('jwt-encode');
// Definimos la clave secreta para la firma
// Signature
const secret = 'clave_secreta';
// Construcción del payload
const data = {
 sub: 'pedroperez@test.com', // Objeto o usuario que emite el JWT
 name: 'Pedro Perez',
 iat: 1645565846.857, // Marca temporal de emision del JWT
};
console.log(data);
// devuelve un string firmado, pasando como argumento el
// Playload y la Signature
const jwt = sign(data, secret);
console.log(jwt);