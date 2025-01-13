//app
// Requerimiento para cargar las varables de entorno .env
// Requerimiento para cargar las variables de entorno .env
require("dotenv").config();

// Conectando a la base de datos
require("./config/database").connect();

// Librerías
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");
const express = require("express");

const app = express();
app.use(express.json());

// Modelo
const User = require("./model/user");
const Libro = require("./model/libro"); // Modelo de Libro

// Validar variables de entorno
if (!process.env.TOKEN_KEY) {
  console.error("ERROR: TOKEN_KEY no está definida en .env");
  process.exit(1);
}

// Registro
app.post("/api/registro", async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    if (!(email && password && first_name && last_name)) {
      return res.status(400).send("Todos los campos son requeridos");
    }

    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res
        .status(409)
        .send("Usuario existente, inicie sesión en /login");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      { expiresIn: "1h" }
    );

    console.log("\nToken generado: " + token);
    return res.status(201).json({ user, token });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Ocurrió un error interno del servidor");
  }
});

// Login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).send("Email y contraseña son requeridos");
    }

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        { expiresIn: "1h" }
      );

      console.log("Token generado: " + token);
      return res.status(200).json({ user, token });
    }

    return res.status(400).send("Credenciales inválidas");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Ocurrió un error interno del servidor");
  }
});

// Rutas de libros
// Obtener todos los libros
app.get("/api/libros", auth, async (req, res) => {
  try {
    const libros = await Libro.find();
    return res.status(200).json(libros);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error al obtener los libros");
  }
});

// Obtener libro por ISBN
// Obtener libro por ISBN
app.get("/api/libros/:isbn", auth, async (req, res) => {
  try {
    // Buscar el libro utilizando el ISBN proporcionado en la URL
    const libro = await Libro.findOne({ isbn: req.params.isbn });

    // Si el libro no se encuentra, devolver un error 404
    if (!libro) {
      return res.status(404).send("Libro no encontrado");
    }

    // Devolver los detalles del libro encontrado
    return res.status(200).json(libro);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error al obtener el libro");
  }
});


// Crear un nuevo libro
// Endpoint para registrar un libro
app.post("/api/libros", auth, async (req, res) => {
  try {
    const { isbn, titulo, autor } = req.body;

    // Verificar que todos los campos requeridos estén presentes
    if (!(isbn && titulo && autor)) {
      return res.status(400).send("Todos los campos (isbn, titulo, autor) son requeridos");
    }

    // Verificar si el libro ya existe en la base de datos (isbn único)
    const oldBook = await Libro.findOne({ isbn });
    if (oldBook) {
      return res.status(409).send("El libro con este ISBN ya existe");
    }

    // Crear un nuevo libro
    const libro = await Libro.create({
      isbn,
      titulo,
      autor,
    });

    // Respuesta exitosa con el libro creado
    return res.status(201).json(libro);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Ocurrió un error interno del servidor");
  }
});

// Actualizar libro por ISBN
app.put("/api/libros/:isbn", auth, async (req, res) => {
  try {
    const { titulo, autor } = req.body;

    const updatedLibro = await Libro.findOneAndUpdate(
      { isbn: req.params.isbn },
      { titulo, autor },
      { new: true }
    );

    if (!updatedLibro) {
      return res.status(404).send("Libro no encontrado");
    }

    return res.status(200).json(updatedLibro);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error al actualizar el libro");
  }
});

// Eliminar libro por ISBN
app.delete("/api/libros/:isbn", auth, async (req, res) => {
  try {
    const deletedLibro = await Libro.findOneAndDelete({ isbn: req.params.isbn });

    if (!deletedLibro) {
      return res.status(404).send("Libro no encontrado");
    }

    return res.status(200).send("Libro eliminado");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error al eliminar el libro");
  }
});


// Ruta protegida
app.get("/api/inicio", auth, (req, res) => {
  res.status(200).json({
    message: "Ruta protegida validada correctamente",
    user: req.user,
  });
});

// Exportar la app
module.exports = app;


//node
//require("crypto").randomBytes(64).toString("hex");
