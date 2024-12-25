// Requerimos la clase User y el modelo
//const User = require("./User");
import User from "./User.js";
//EXERCISE 1: CONEXIÓN Y CREACIÓN DE LA TABLA USERS EN LA BASE DE 
(async function () {
  console.log("Ejecutando la migración del objeto User");
  await User.CreateTable();
  console.log("Migración Realizada");
})();

//node insertUser.js

