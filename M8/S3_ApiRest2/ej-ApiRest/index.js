// Importando Express.js
const express = require("express");
// Importamos la extensión de body-parser
const bodyParser = require("body-parser");

// Inicializamos la aplicación de Express
const app = express();

// Indica a Express.js que se estará utilizando un complemento adicional para tratar parámetros
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Para soportar JSON en el cuerpo de las solicitudes

// Inicializamos una lista para almacenar los libros
let listaLibros = [];

//1. CREAR LA RUTA DE LISTAR TODOS LOS LIBROS
app.get("/libros", (request, response) => {
  return response.status(200).json({
    libros: listaLibros,
  });
});

//2. CREAR LA RUTA DE ELIMINAR UN LIBRO
app.delete("/libros", (request, response) => {
  const libroAEliminar = request.body.isbn;
  listaLibros = listaLibros.filter((l) => l.isbn !== libroAEliminar);
  return response.status(200).json({
    todosLibros: listaLibros,
  });
});

//3. CREA LA RUTA PARA ACTUALIZAR UN LIBRO
app.put("/libros", (request, response) => {
  const libroActualizar = request.body.isbn;
  const libroActualizado = request.body;
  const indiceLibroActualizar = listaLibros.findIndex(
    (l) => l.isbn === libroActualizar
  );
  if (indiceLibroActualizar === -1) {
    return response.status(404).json({
      success: false,
      message: "El libro no fue encontrado.",
    });
  }
  listaLibros[indiceLibroActualizar] = libroActualizado;
  return response.status(200).json({
    success: true,
    message: "El libro fue actualizado exitosamente.",
  });
});

//4. RECEPCIÓN Y RESPUESTA DE CÓDIGOS HTTP
app.post("/libros", (request, response) => {
  const isbnLibro = request.body.isbn;
  let isbnBusqueda = listaLibros.find((l) => l.isbn === isbnLibro);
  if (isbnBusqueda) {
    return response.status(409).json({
      message: "Conflicto, recurso duplicado por isbn",
    });
  }
  listaLibros.push(request.body);
  return response.status(201).json({
    message: "Se agregó correctamente el recurso libro",
  });
});

// Inicia el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
