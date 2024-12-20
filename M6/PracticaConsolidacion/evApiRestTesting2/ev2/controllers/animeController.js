const { obtenerAnimes, agregarAnime, actualizarAnime, eliminarAnime } = require("../services/animeService");
const { leerArchivo } = require("../utils/fileUtils");
const { parse } = require('url');

const manejarPeticion = async (req, res) => {
  const { pathname, query } = parse(req.url, true);
  const { id, nombre } = query;

  if (pathname !== "/animes") {
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end("Ruta no encontrada.");
  }

  try {
    switch (req.method) {
      case "GET":
        await obtenerAnimes(res, id, nombre);
        break;

      case "POST":
        await agregarAnime(req, res);
        break;

      case "PUT":
        if (!id) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          return res.end("ID requerido para actualizar.");
        }
        await actualizarAnime(req, res, id);
        break;

      case "DELETE":
        if (!id) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          return res.end("ID requerido para eliminar.");
        }
        await eliminarAnime(res, id);
        break;

      default:
        res.writeHead(405, { "Content-Type": "text/plain" });
        res.end("Método no permitido.");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end(error.message || "Error interno del servidor.");
  }
};

module.exports = { manejarPeticion };
