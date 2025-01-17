//EXERCISE 3: MANEJO DE CURSORES EN NODE
//npm install pg-cursor

const {
  Pool
 } = require('pg')
 const Cursor = require('pg-cursor')
 const assert = require('assert')
 const pool = new Pool({
  user: 'node_user',
  host: 'localhost',
  database: 'db_node',
  password: 'node_password',
  port: 5432,
 })
 const buscarTodos = async () => {
  try {
  const client = await pool.connect()
  const cursor = client.query(new Cursor('SELECT * from users'))
  // Leemos los dos primeros registros
  let rows = await cursor.read(2)
  // procedemos a realizar cualqui procedimiento con los registros
  console.log(rows)
  console.table(rows)
  console.log(rows.length)
  console.assert(rows.length == 2) // Verificamos
  // volvemos a leer los siguientes 2 registros
  rows = await cursor.read(2)
  // procedemos a realizar cualqui procedimiento con los registros
  console.log(rows)
  console.table(rows)
  console.log(rows.length)
  console.assert(rows.length == 2) // Verificamos
  // volvemos a leer los siguientes 2 registros
 rows = await cursor.read(2)
 // procedemos a realizar cualqui procedimiento con los registros
 console.log(rows)
 console.table(rows)
 console.log(rows.length)
 console.assert(rows.length == 2) // Verificamos
 // volvemos a leer los siguientes 2 registros
 rows = await cursor.read(2)
 // procedemos a realizar cualqui procedimiento con los registros
 console.log(rows)
 console.table(rows)
 console.log(rows.length)
 console.assert(rows.length == 2) // verificamos hasta no tengamos mas registros
 } catch (error) {
 console.error(error.stack);
 console.log(error.code)
 } finally {
 await pool.end(); // Cerrando conexión
 }
};
buscarTodos()