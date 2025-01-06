// Importando Express.js
const express = require("express");
// Importamos la extensión de body-parser
const bodyParser = require("body-parser");

// Inicializamos la aplicación de Express
const app = express();

// Configuración de middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Para soportar JSON en el cuerpo de las solicitudes

// Inicializamos una lista para almacenar los jugadores
let jugadores = [];

// 1. CREAR LA RUTA DE LISTAR TODOS LOS JUGADORES
app.get("/api/jugadores", (request, response) => {
  return response.status(200).json({
    jugadores,
  });
});

// 2. CREAR LA RUTA PARA AÑADIR UN JUGADOR
app.post("/api/jugadores", (request, response) => {
  const { id, nombre, posicion } = request.body;

  // Verificar si el jugador ya existe
  const jugadorExistente = jugadores.find((j) => j.id === id);
  if (jugadorExistente) {
    return response.status(409).json({
      message: "Conflicto, ya existe un jugador con ese ID.",
    });
  }

  // Agregar el nuevo jugador
  jugadores.push({ id, nombre, posicion });
  return response.status(201).json({
    message: "Jugador agregado exitosamente.",
    jugador: { id, nombre, posicion },
  });
});

// 3. CREA LA RUTA PARA ACTUALIZAR UN JUGADOR
app.put("/api/jugadores/:id", (request, response) => {
  const { id } = request.params;
  const { nombre, posicion } = request.body;

  // Buscar el índice del jugador a actualizar
  const indiceJugador = jugadores.findIndex((j) => j.id === id);
  if (indiceJugador === -1) {
    return response.status(404).json({
      success: false,
      message: "El jugador no fue encontrado.",
    });
  }

  // Actualizar los datos del jugador
  jugadores[indiceJugador] = { id, nombre, posicion };
  return response.status(200).json({
    success: true,
    message: "El jugador fue actualizado exitosamente.",
    jugador: jugadores[indiceJugador],
  });
});

// 4. CREA LA RUTA PARA ELIMINAR UN JUGADOR
app.delete("/api/jugadores/:id", (request, response) => {
  const { id } = request.params;

  // Verificar si el jugador existe
  const jugadorExistente = jugadores.find((j) => j.id === id);
  if (!jugadorExistente) {
    return response.status(404).json({
      message: "Jugador no encontrado.",
    });
  }

  // Eliminar el jugador
  jugadores = jugadores.filter((j) => j.id !== id);
  return response.status(200).json({
    message: "Jugador eliminado exitosamente.",
  });
});

// Inicia el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
