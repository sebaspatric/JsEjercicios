/*
Verifique los componentes para generar un JSON Web Token, haciendo uso de las librerías de
codificación y decodificación ( node.jwt ), y utilizando el siguiente payload:

{
 name: 'Pedro Perez',
 iss: "localhost@jwr.com", // proveedor de identidad que emite el JWT
 sub: 'pedroperez@test.com', // Objeto o usuario que emite el JWT
 ext: // Tiempo de expiración por 10 minutos
 iat: // Marca temporal de emision del JWT actual
 nbf: // Valido luego de 1min
};

Con la clave secreta: mi_clave_secreta, y algoritmo HS256 del tipo ‘JWT’.
Adecue el código para utilizar un token generado aleatoriamente, y que realice la lectura de dicho token
por un archivo cuya variable es: KEY_TOKEN.
Verifique los resultados en el Debugger de jwt.io para todos los casos de encriptación y decodificación,
respectivamente. 
*/
// con esm
import fs from 'fs';
import jwt from 'jsonwebtoken';

// Encabezado (opcional, implícito al usar jwt.sign)
const header = {
  alg: 'HS256',
  typ: 'JWT'
};

// Payload
const payload = {
  name: 'Pedro Perez',
  iss: 'localhost@jwr.com',
  sub: 'pedroperez@test.com',
  exp: Math.floor(Date.now() / 1000) + (10 * 60), // Tiempo de expiración por 10 minutos
  iat: Math.floor(Date.now() / 1000), // Marca de tiempo actual
  nbf: Math.floor(Date.now() / 1000) + 60 // Válido después de 1 minuto
};

// Clave secreta
const secretKey = 'mi_clave_secreta';

// Archivo para almacenar el token
const KEY_TOKEN = 'KEY_TOKEN.txt';

// Función para generar y guardar el token
const generateAndSaveToken = () => {
  // Generar el token
  const token = jwt.sign(payload, secretKey, { algorithm: header.alg });
  
  // Guardar el token en un archivo
  fs.writeFileSync(KEY_TOKEN, token);
  console.log('Token generado y guardado en el archivo:', KEY_TOKEN);
  return token;
};

// Función para leer y verificar el token
const readAndVerifyToken = () => {
  try {
    // Leer el token del archivo
    const tokenFromFile = fs.readFileSync(KEY_TOKEN, 'utf8');
    
    // Verificar y decodificar el token
    const decoded = jwt.verify(tokenFromFile, secretKey, { algorithms: [header.alg] });
    console.log('Token leído y decodificado:', decoded);
  } catch (error) {
    console.error('Error al verificar el token:', error.message);
    
    // Si hay error, generar un nuevo token
    const newToken = generateAndSaveToken();
    console.log('Se generó un nuevo token debido al error.');
    console.log('Nuevo token decodificado:', jwt.verify(newToken, secretKey));
  }
};

// Main: Generar, guardar y verificar el token
try {
  // Generar el token si el archivo no existe
  if (!fs.existsSync(KEY_TOKEN)) {
    console.log('Archivo no encontrado. Generando un nuevo token...');
    generateAndSaveToken();
  }

  // Verificar el token
  readAndVerifyToken();
} catch (error) {
  console.error('Error en el flujo principal:', error.message);
}
