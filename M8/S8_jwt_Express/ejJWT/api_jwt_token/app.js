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

// Validar variables de entorno
if (!process.env.TOKEN_KEY) {
  console.error("ERROR: TOKEN_KEY no está definida en .env");
  process.exit(1);
}

// Registro
app.post("/registro", async (req, res) => {
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
app.post("/login", async (req, res) => {
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

// Ruta protegida
app.get("/inicio", auth, (req, res) => {
  res.status(200).json({
    message: "Ruta protegida validada correctamente",
    user: req.user,
  });
});

// Exportar la app
module.exports = app;


//node
//require("crypto").randomBytes(64).toString("hex");
