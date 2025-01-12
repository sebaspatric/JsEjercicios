//middleware/auth
const jwt = require("jsonwebtoken");
const config = process.env;

const verifyToken = (req, res, next) => {
  // Obtener el token desde el cuerpo, query o encabezados
  let token = req.body.token || req.query.token || req.headers["authorization"];

  // Verificar si el token comienza con "Bearer "
  if (token && token.startsWith("Bearer ")) {
    token = token.slice(7, token.length); // Remover "Bearer "
  }

  // Log para depurar el token recibido
  console.log("Token recibido:", token);

  // Si no se recibió el token, retornar error
  if (!token) {
    return res.status(403).send("Un token es requerido para la autorización");
  }

  try {
    // Verificar y decodificar el token
    const decoded = jwt.verify(token, config.TOKEN_KEY);

    // Guardar los datos del usuario decodificados en la solicitud
    req.user = decoded;

    // Continuar con la solicitud
    next();
  } catch (err) {
    // Si el token no es válido, retornar error
    console.error("Error al verificar el token:", err.message);
    return res.status(401).send("Token no válido, acceso denegado");
  }
};

module.exports = verifyToken;
