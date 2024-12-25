//const { pool } = require("./dataBase.js");
import { pool } from './dataBase.js';

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Creando la tabla en la bases de datos
  static CreateTable() {
    const sql = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    age INTEGER)`;
    console.log("Preparando para crear la tabla users...");
    return new Promise(function (resolve) {
      pool.query(sql, function () {
        console.log("...se ha creado la tabla users!");
        resolve("Satisfactoriamente");
      });
    });
  }

// Metodo de inserción de un usuario
insert() {
    const self = this
    const sql = "INSERT INTO users (name,age) VALUES ($1,$2) RETURNING id"
    console.log(`Insertando el usuario: ${self.name} a la base de
   datos...`)
    // Resolviendo la consulta como una promesa
    return new Promise(function (resolve) {
    pool.query(sql, [self.name, self.age], function (err, res)
   {
    if (err) {
    console.log(err)
    }
    console.log(`...usuario con id: ${res.rows[0].id}
   insertado en la bases de datos`)
    resolve(self)
      });
    });
  }
}

// Exportamos la clase User
//module.exports = User;
export default User;