// Importando Express.js
const express = require("express");
// Importamos la extención de body-parser
const bodyParser = require("body-parser");

// Inicializamos la aplicación de Express
const app = express();

// Indica a Express.js que se estará utilizando un complemento adicional para tratar parámetros
app.use(bodyParser.urlencoded({ extended: true }));

// Inicializamos una lista para almacenar los libros
const listaLibros = [];

//1. CREAR LA RUTA DE AÑADIR UN LIBRO
// POST se usa para AGREGAR datos en la API, en este caso un libro
//app.post("/libros", (request, response) => {
//  // obtenemos los parámetros del isbn
//  const isbnLibro = request.body.isbn;
//  // verificamos si el isbn se encuentra en la lista de libros
//  let isbnBusqueda = listaLibros.find((l) => l.isbn === isbnLibro);
//  // De ser cierto, devolvemos 'false', que no se inserto
//  if (isbnBusqueda)
//    return response.json({
//      success: false,
//    });
//  // De lo contrario, agregamos el nuevo libro a la lista y retornamos
//  ("true");
//  listaLibros.push(request.body);
//  return response.json({
//    success: true,
//  });
//});

//2. CREAR LA RUTA DE ELIMINAR UN LIBRO
app.delete("/libros", (request, response) => {
  // obtendremos el parámetro isbn del cuerpo
  const libroAEliminar = request.body.isbn;
  // Se crea una nueva lista de objetos diferentes al libro a eliminar
  listaLibros = listaLibros.filter((l) => l.isbn !== libroAEliminar);
  // Retornamos la lista de libros
  return response.json({
    todosLibros: listaLibros,
  });
});

//3. CREA LA RUTA PARA ACTUALIZAR UN LIBRO
app.put("/libros", (request, response) => {
  // obtenemos los parámetros, el isbn a actualizar
  const libroActualizar = request.body.isbn;
  const libroActualizado = request.body;
  // Buscamos si el libro se encuentra en la lista
  // de objetos Libros
  const indiceLibroActualizar = listaLibros.findIndex(
    (l) => l.isbn === libroActualizar
  );
  // Si el libro no esta en la lista, retornamos false
  if (indiceLibroActualizar === -1)
    return response.json({
      success: false,
    });
  // Ahora actualizamos el libro los nuevos campos
  listaLibros[indiceLibroActualizar] = libroActualizado;
  return response.json({
    success: true,
  });
});

// Inicia el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

//4. RECEPCIÓN Y RESPUESTA DE CÓDIGOS HTTP

// POST se usa para AGREGAR datos en la API, en este caso un libro
app.post('/libros', (request, response) => {
    // obtenemos los parametros del isbn
    const isbnLibro = request.body.isbn;
    // verificamos si el isbn se encuentra en la lista de libros
    let isbnBusqueda = listaLibros.find(l => l.isbn === isbnLibro);
    // De ser cierto, devolvemos 'false', que no se inserto
    if (isbnBusqueda) return response.status(409).json({
    message: 'Conflicto, recurso duplicado por isbn'
    });
    // De lo contrario, agregamos el nuevo libro a la lista y retornamos
   'true'
    listaLibros.push(request.body);
    return response.status(201).json({
    message: 'Se Agrego Correctamente el recurso libro'
    });
   });