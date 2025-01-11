require("dotenv").config;
const express = require("express");
const app = express();
app.use(express.json());
const jwt = require("jsonwebtoken");
const port = process.env.PORT;
app.listen(port, () => {
  console.log("Servidor de validación ejecutándose en $ {port}...");
});
app.get("/posts", validateToken, (req, res) => {
  console.log("El token es válido");
  console.log(req.user.user);
  res.send(`${req.user.user} acceso exitoso `);
});
