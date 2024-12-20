const http = require("http");
const fs = require("fs/promises");
const { parse } = require("url");
const { v4: uuidv4 } = require("uuid");

const archivo = "animes.json";

// Función para leer archivo JSON
const leerArchivo = async (archivo) => {
  try {
    const data = await fs.readFile(archivo, "utf8");
    return JSON.parse(data);
  } catch {
    return {};
  }
};

// Función para escribir en archivo JSON
const escribirArchivo = async (archivo, contenido) => {
  try {
    await fs.writeFile(archivo, JSON.stringify(contenido, null, 2));
  } catch (error) {
    throw new Error("Error al escribir en el archivo.");
  }
};

const manejarPeticion = async (req, res) => {
  const { pathname, query } = parse(req.url, true);
  const { id, nombre } = query;

  if (pathname !== "/animes") {
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end("Ruta no encontrada.");
  }

  try {
    const animes = await leerArchivo(archivo);

    switch (req.method) {
      case "GET":
        if (id) {
          const animePorId = animes[id];
          if (animePorId) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(animePorId));
          } else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Anime no encontrado.");
          }
        } else if (nombre) {
          const animePorNombre = Object.values(animes).find(
            (a) => a.nombre.toLowerCase() === nombre.toLowerCase()
          );
          if (animePorNombre) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(animePorNombre));
          } else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Anime no encontrado.");
          }
        } else {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(animes));
        }
        break;

      case "POST":
        let nuevoAnime = "";
        req.on("data", (chunk) => {
          nuevoAnime += chunk;
        });

        req.on("end", async () => {
          nuevoAnime = JSON.parse(nuevoAnime);
          const id = uuidv4();
          animes[id] = nuevoAnime;
          await escribirArchivo(archivo, animes);
          res.writeHead(201, { "Content-Type": "text/plain" });
          res.end("Anime agregado exitosamente.");
        });
        break;

      case "PUT":
        if (!id) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          return res.end("ID requerido para actualizar.");
        }

        let animeActualizado = "";
        req.on("data", (chunk) => {
          animeActualizado += chunk;
        });

        req.on("end", async () => {
          animeActualizado = JSON.parse(animeActualizado);
          if (animes[id]) {
            animes[id] = { ...animes[id], ...animeActualizado };
            await escribirArchivo(archivo, animes);
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Anime actualizado exitosamente.");
          } else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Anime no encontrado.");
          }
        });
        break;

      case "DELETE":
        if (!id) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          return res.end("ID requerido para eliminar.");
        }

        if (animes[id]) {
          delete animes[id];
          await escribirArchivo(archivo, animes);
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("Anime eliminado exitosamente.");
        } else {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Anime no encontrado.");
        }
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

const servidor = http.createServer(manejarPeticion).listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000/");
});

module.exports = { servidor };

