//npm install jsonwebtoken

import cryptoRandomString from 'crypto-random-string';
import jwt from 'jsonwebtoken';

// Generar un token aleatorio de tipo base64url como clave secreta
const secretKey = cryptoRandomString({ length: 16, type: 'url-safe' });

// Definir el encabezado
const header = {
    alg: "HS256",
    typ: "JWT"
};

// Definir el payload
const payload = {
    iss: "midominio.com",
    exp: 1540839345,
    name: "Pedro Perez",
    email: "pedroperez@midominio.com",
    iat: 1516239022
};

// Convertir a Base64URL
const base64UrlEncode = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');

const encodedHeader = base64UrlEncode(header);
const encodedPayload = base64UrlEncode(payload);

// Construir la parte Y del JWT
const Y = `${encodedHeader}.${encodedPayload}`;

// Generar la firma
const signature = jwt.sign(payload, secretKey, { algorithm: 'HS256', header });

// Construir el JWT completo
const jwtToken = `${Y}.${signature.split('.')[2]}`;

// Imprimir resultados
console.log("Clave secreta:", secretKey);
console.log("JWT:", jwtToken);
