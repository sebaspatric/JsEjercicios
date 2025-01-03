// Importando Express.js
const express = require("express");
// Este variable define el puerto del computador donde la API esta disponible
const PORT = 3000;
// Definimos la variable que inicializa la libreria Express.js
const app = express();
// El siguiente código contiene:
// 1 - El puerto donde esta disponible la API
// 2 - Una función de llamada (callback) cuando la API esta lista
app.listen(PORT, () =>
  console.log(`La API de LIBROS se esta ejecuntando en: http:
//localhost: ${PORT}.`)
);

app.get("/", (request, response) => {
  // Se despliega una cadena de caracteres en http://localhost:3000
  response.send(
    "¡Bienvenido a la API de libros! ¡Está todo listo para comenzar a utilizarlo!"
  );
});

let listaLibros = [
  {
    isbn: "978-1-61729-242-2",
    titulo: "Express in Action",
    autor: "EVAN M. HAHN",
  },
  {
    isbn: "978-1-78398-586-9",
    titulo: "RESTful Web API Design with Node.js",
    autor: "Valentin Bojinov",
  },
];

app.get("/libros", (request, response) => {
  // La función devolverá su lista de libros en un formato JSON
  return response.json({
    todosLibros: listaLibros,
  });
});

