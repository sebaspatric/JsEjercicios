//app
// Requerimiento para cargar las varables de entorno .env
require("dotenv").config();
// Conectando a la base de datos
require("./config/database").connect();
// Librerias de encriptacion de jsonwebtoken
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// middleware que valida el Token JWT
const auth = require("./middleware/auth");
const express = require("express");
const app = express();
app.use(express.json());
// Logic goes here

// Importando la logista del modelo
const User = require("./model/user");
// Registro

// Login

// Registro
app.post("/registro", async (req, res) => {
  // logica del registro
  try {
    // obteniendo los valores de entrada
    const { first_name, last_name, email, password } = req.body;
    // Validar los datos de entrada
    if (!(email && password && first_name && last_name)) {
      return res.status(400).send("Todos los campos son requeridos");
    }
    // Chequeando si el usuario existe
    // Validar si el usuario existe en la bases de datos
    const oldUser = await User.findOne({
      email,
    });
    if (oldUser) {
      return res
        .status(409)
        .send(
          "Actualmente el usuario existe,inicie login en http://localhost:5001/login"
        );
    }
    // Encriptando la contraseña del usuario
    encryptedPassword = await bcrypt.hash(password, 10);
    // Password encriptado
    console.log("\nPassword encriptado: " + encryptedPassword);
    // Creando el usuario en la bases de datos
    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(), // Convertimos a minuscula
      password: encryptedPassword,
    });
    // Creación del Token
    const token = jwt.sign(
      {
        user_id: user._id,
        email,
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: "1h",
      }
    );
    // Token Generado
    console.log("\nToken Generdo: " + token);
    // retornamos el nuevo usuario
    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});
//module.exports = app;

app.post("/login", async (req, res) => {
  // logica del inicio de sesión
  try {
    // obteniendo los datos de entrada
    const { email, password } = req.body;
    console.log("Datos recibidos:", { email, password });

    // Validar los datos de entrada
    if (!(email && password)) {
      return res
        .status(400)
        .send("Todos los datos son requeridos, email y password");
    }
    // Validando la existencia del usuario en la base de datos
    const user = await User.findOne({
      email,
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      // Se genera el Token
      const token = jwt.sign(
        {
          user_id: user._id,
          email,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: "1h",
        }
      );
      // Impresion por el terminal del Token generado para el usuario
      console.log("Usuario: " + email + "\nToken: " + token);
      // Retornando los datos del usuario
      return res.status(200).json(user);
    }
    return res.status(400).send("Credenciales invalidas");
  } catch (err) {
    console.log(err);
  }
});


app.get("/inicio", auth, (req, res) => {
  res.status(200).send("Bienvenido, se ha validado correctamente esta ruta /inicio con el Token JWT 🙌");
});

   
module.exports = app;

//node
//require("crypto").randomBytes(64).toString("hex");
