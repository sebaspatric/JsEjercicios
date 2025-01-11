import jwt from 'jsonwebtoken';
import jwt from 'jsonwebtoken';

function validateToken(req, res, next) {
  // Obtiene el token de la cabecera de la solicitud
  const authHeader = req.headers['authorization'];
  
  // Verifica si la cabecera de autorización está presente
  if (!authHeader) {
    return res.status(400).send("Token no presente en la cabecera de autorización");
  }

  // Divide la cabecera para obtener el token (formato: "Bearer <token>")
  const token = authHeader.split(' ')[1];

  // Verifica si el token existe
  if (!token) {
    return res.status(400).send("Token no presente");
  }

  // Verifica y decodifica el token usando la clave secreta
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).send("El token es inválido");
    }

    // Almacena los datos del usuario decodificados en `req.user`
    req.user = user;

    // Llama a la siguiente función middleware
    next();
  });
}

export default validateToken;
