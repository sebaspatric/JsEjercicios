// Importar las librerías
//const jwt_encode = require('jwt-encode');
//const jwt_decode = require('jwt-decode');
// Importar las librerías como módulos ESM
import jwt_encode from 'jwt-encode';
import jwt_decode from 'jwt-decode';



// Payload
const payload = {
  iss: "midominio.com",
  exp: 1540839345,
  name: "Pedro Perez",
  email: "pedroperez@midominio.com",
  iat: 1516239022,
};

// Clave secreta
const secretKey = 'mi_clave_secreta';

// Generar el JWT
const token = jwt_encode(payload, secretKey);
console.log("Token generado:");
console.log(token);

// Decodificar el JWT
const decoded = jwt_decode(token);
console.log("\nToken decodificado:");
console.log(decoded);
