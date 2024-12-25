// Requerimos la clase User y el modelo
//const User = require("./User");
import User from "./User.js";

(async function () {
  console.log("Ejecutando la migración del objeto User");
  await User.CreateTable();
  console.log("Migración Realizada");
})();

//node insertUser.js

const user1 = new User("Jose Perez", 35);
console.log(user1);

// insertamos en  la base de datos con el método creado
// insert() pertenese a un metodo estatico de la clase user
await user1.insert();