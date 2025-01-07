// Cargando el modulo de Express.js
const express = require("express");
// Cargando la librería de express-fileupload
const fileUpload = require("express-fileupload");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const app = express();

// Configuración básica
const baseUrl = "http://localhost:3000/files/";
const booksDirectory = "./files/books/";

// Middleware
app.use(express.json());
app.use(
  fileUpload({
    createParentPath: true,
  })
);

// Crear directorio para libros si no existe
if (!fs.existsSync(booksDirectory)) {
  fs.mkdirSync(booksDirectory, { recursive: true });
}

// Simulación de base de datos
let books = [];

// 1. Añadir un libro con imagen de portada
app.post("/books", async (req, res) => {
  try {
    const { title, author } = req.body;

    // Validaciones básicas
    if (!title || !author) {
      return res.status(400).send({
        message: "El título y el autor son obligatorios.",
      });
    }

    if (!req.files || !req.files.cover) {
      return res.status(400).send({
        message: "Debe proporcionar una imagen de portada en formato PNG o JPG.",
      });
    }

    const cover = req.files.cover;
    const validExtensions = ["image/png", "image/jpeg"];
    if (!validExtensions.includes(cover.mimetype)) {
      return res.status(400).send({
        message: "La portada debe ser una imagen PNG o JPG.",
      });
    }

    // Guardar la portada en el servidor
    const coverPath = path.join(booksDirectory, `${Date.now()}_${cover.name}`);
    await cover.mv(coverPath);

    // Crear el libro y guardarlo
    const newBook = {
      id: books.length + 1,
      title,
      author,
      coverUrl: baseUrl + path.basename(coverPath),
    };
    books.push(newBook);

    res.status(201).send({
      message: "Libro añadido con éxito.",
      book: newBook,
    });
  } catch (err) {
    res.status(500).send({
      message: "Ocurrió un error al añadir el libro.",
      error: err.message,
    });
  }
});

// 2. Eliminar un libro y su imagen de portada
app.delete("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const bookIndex = books.findIndex((b) => b.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).send({
      message: "Libro no encontrado.",
    });
  }

  const book = books[bookIndex];

  // Eliminar la portada del servidor
  const coverPath = path.join(booksDirectory, path.basename(book.coverUrl));
  if (fs.existsSync(coverPath)) {
    fs.unlinkSync(coverPath);
  }

  // Eliminar el libro de la lista
  books.splice(bookIndex, 1);

  res.status(200).send({
    message: "Libro eliminado con éxito.",
  });
});

// 3. Actualizar un libro y su imagen de portada
app.put("/books/:id", async (req, res) => {
  try {
    const bookId = parseInt(req.params.id, 10);
    const bookIndex = books.findIndex((b) => b.id === bookId);

    if (bookIndex === -1) {
      return res.status(404).send({
        message: "Libro no encontrado.",
      });
    }

    const { title, author } = req.body;
    const book = books[bookIndex];

    // Actualizar título y autor
    if (title) book.title = title;
    if (author) book.author = author;

    // Actualizar portada si se proporciona
    if (req.files && req.files.cover) {
      const cover = req.files.cover;
      const validExtensions = ["image/png", "image/jpeg"];
      if (!validExtensions.includes(cover.mimetype)) {
        return res.status(400).send({
          message: "La portada debe ser una imagen PNG o JPG.",
        });
      }

      // Eliminar la portada anterior
      const oldCoverPath = path.join(booksDirectory, path.basename(book.coverUrl));
      if (fs.existsSync(oldCoverPath)) {
        fs.unlinkSync(oldCoverPath);
      }

      // Guardar la nueva portada
      const newCoverPath = path.join(booksDirectory, `${Date.now()}_${cover.name}`);
      await cover.mv(newCoverPath);
      book.coverUrl = baseUrl + path.basename(newCoverPath);
    }

    res.status(200).send({
      message: "Libro actualizado con éxito.",
      book,
    });
  } catch (err) {
    res.status(500).send({
      message: "Ocurrió un error al actualizar el libro.",
      error: err.message,
    });
  }
});

// Listar todos los libros
app.get("/books", (req, res) => {
  res.status(200).send(books);
});

// Descargar portada de un libro
app.get("/books/cover/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(booksDirectory, filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).send({
      message: "Portada no encontrada.",
    });
  }

  res.download(filePath);
});

// Iniciar servidor
app.listen(PORT, () =>
  console.log(
    `Servidor corriendo en: http://localhost:${PORT}.`
  )
);
