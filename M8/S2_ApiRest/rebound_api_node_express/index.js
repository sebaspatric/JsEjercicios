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
    return res.status(404).json({ mensaje: "Jugador no encontrado" });
  }
  return res.json(jugador);
});

// Ruta para agregar un nuevo jugador
app.post("/api/jugadores", (req, res) => {
  const { id, nombre, posicion } = req.body;

  // Validación de datos
  if (!id || !nombre || !posicion) {
    return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
  }

  // Verificar si el ID ya existe
  if (listaJugadores.some((j) => j.id === id)) {
    return res.status(400).json({ mensaje: "El ID del jugador ya existe" });
  }

  // Agregar el nuevo jugador
  const nuevoJugador = { id, nombre, posicion };
  listaJugadores.push(nuevoJugador);

  return res.status(201).json({ mensaje: "Jugador agregado exitosamente", nuevoJugador });
});

// Iniciando la API
app.listen(PORT, () =>
  console.log(`La API de jugadores se está ejecutando en: http://localhost:${PORT}.`)
);
