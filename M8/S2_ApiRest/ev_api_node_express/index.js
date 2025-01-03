// Importando Express.js
const express = require("express");

// Puerto donde la API estará disponible
const PORT = 3000;

// Inicializando la librería Express.js
const app = express();

// Middleware para procesar datos en formato JSON
app.use(express.json());

// Lista inicial de jugadores
let listaJugadores = [
  { id: "1", nombre: "Elías Figueroa", posicion: "Central" },
  { id: "2", nombre: "Ben Brereton Díaz", posicion: "Delantero" },
  { id: "3", nombre: "Arturo Vidal", posicion: "Mediocampista" },
];

// Ruta para el listado de todos los jugadores
app.get("/api/jugadores", (req, res) => {
  return res.json({ listaJugadores });
});

// Ruta para obtener datos de un jugador según su ID
app.get("/api/jugadores/:id", (req, res) => {
  const jugador = listaJugadores.find((j) => j.id === req.params.id);

  if (!jugador) {
    // Error si no se encuentra el jugador por ID
    return res.status(404).json({
      mensaje: "Se presentó un error: jugador no encontrado",
      error: "ID no válido",
    });
  }

  return res.json(jugador);
});

// Ruta para agregar un nuevo jugador
app.post("/api/jugadores", (req, res) => {
  const { id, nombre, posicion } = req.body;

  // Validación de datos
  if (!id || !nombre || !posicion) {
    return res.status(400).json({
      mensaje: "Se presentó un error al agregar el jugador",
      error: "Todos los campos (id, nombre, posición) son obligatorios",
    });
  }

  // Verificar si el ID o el nombre ya existen
  if (
    listaJugadores.some(
      (j) => j.id === id || j.nombre.toLowerCase() === nombre.toLowerCase()
    )
  ) {
    return res.status(400).json({
      mensaje: "Se presentó un error al agregar el jugador",
      error: "Ya existe un jugador con el mismo ID o nombre",
    });
  }

  // Agregar el nuevo jugador
  const nuevoJugador = { id, nombre, posicion };
  listaJugadores.push(nuevoJugador);

  return res.status(201).json({
    mensaje: "Jugador agregado exitosamente",
    nuevoJugador,
  });
});

// Iniciando la API
app.listen(PORT, () =>
  console.log(`La API de jugadores se está ejecutando en: http://localhost:${PORT}.`)
);
