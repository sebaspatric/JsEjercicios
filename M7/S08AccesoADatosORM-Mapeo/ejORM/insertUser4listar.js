// Requerimos la clase User y el modelo
//const User = require("./User");
import User from "./User.js";

//EXERCISE 1: CONEXIÓN Y CREACIÓN DE LA TABLA USERS EN LA BASE DE 
//(async function () {
//  console.log("Ejecutando la migración del objeto User");
//  await User.CreateTable();
//  console.log("Migración Realizada");
//})();

//node insertUser.js

//EXERCISE 2: CREAR EL CONSTRUCTOR Y MÉTODO INSERT()
//const user1 = new User("Jose Perez", 35);
//console.log(user1);
// insertamos en  la base de datos con el método creado
// insert() pertenese a un metodo estatico de la clase user
//await user1.insert();

//EXERCISE 3: CREAR EL MÉTODO ESTÁTICO DE BÚSQUEDA DE USUARIO POR ID
// Buscamos un usuario segun el ID 1
// User.Find(1)

 //  //EXERCISE 4: CREAR EL MÉTODO ESTÁTICO DE BUSCAR TODOS LOS USUARIOS
 let allUser = await User.All()
 console.log(allUser)