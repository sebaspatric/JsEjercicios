const { leerArchivo, escribirArchivo } = require("../utils/fileUtils");
const { v4: uuidv4 } = require("uuid");

const archivo = "animes.json";

// Obtener todos los animes o un anime específico por id o nombre
const obtenerAnimes = async (res, id, nombre) => {
  const animes = await leerArchivo(archivo);

  if (id) {
    if (animes[id]) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(animes[id]));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Anime no encontrado.");
    }
  } else if (nombre) {
    const anime = Object.values(animes).find(
      (a) => a.nombre.toLowerCase() === nombre.toLowerCase()
    );
    if (anime) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(anime));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Anime no encontrado.");
    }
  } else {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(animes));
  }
};

// Agregar un nuevo anime
const agregarAnime = async (req, res) => {
  let nuevoAnime = "";
  req.on("data", (chunk) => {
    nuevoAnime += chunk;
  });

  req.on("end", async () => {
    nuevoAnime = JSON.parse(nuevoAnime);
    const animes = await leerArchivo(archivo);
    const id = uuidv4();
    animes[id] = nuevoAnime;
    await escribirArchivo(archivo, animes);
    res.writeHead(201, { "Content-Type": "text/plain" });
    res.end("Anime agregado exitosamente.");
  });
};

// Actualizar un anime existente
const actualizarAnime = async (req, res, id) => {
  let animeActualizado = "";
  req.on("data", (chunk) => {
    animeActualizado += chunk;
  });

  req.on("end", async () => {
    animeActualizado = JSON.parse(animeActualizado);
    const animes = await leerArchivo(archivo);

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
};

// Eliminar un anime
const eliminarAnime = async (res, id) => {
  const animes = await leerArchivo(archivo);

  if (animes[id]) {
    delete animes[id];
    await escribirArchivo(archivo, animes);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Anime eliminado exitosamente.");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Anime no encontrado.");
  }
};

module.exports = {
  obtenerAnimes,
  agregarAnime,
  actualizarAnime,
  eliminarAnime,
};
