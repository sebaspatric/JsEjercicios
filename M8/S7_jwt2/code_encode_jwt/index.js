// Importamos la librería node.jwt
const jwt = require("node.jwt");
// Construcción del payload
const payload = {
  name: "Pedro Perez",
  iss: "localhost@jwr.com", // proveedor de identidad que emite el JWT
  sub: "pedroperez@test.com", // Objeto o usuario que emite el JWT
  ext: Date.now() / 1000 + 60 * 60 * 24 * 2, // Tiempo de expiración por 2 dias
  iat: Date.now() / 1000, // Marca temporal de emision del JWT
  nbf: Date.now() / 1000 - 60 * 5,
};
// Definimos la clave secreta para la firma
// Signature
const secret = jwt.secret("clave_secreta");
// Generando el token
let tokenJWT = jwt.encode(payload, secret);
console.log(tokenJWT);
// Decodificando el token
let result = jwt.decode(tokenJWT, secret);
console.log(result);

