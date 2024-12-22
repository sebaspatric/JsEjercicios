//EXERCISE 1: PROCESAR INFORMACIÓN POR MEDIO DEL OBJETO RESULT()
const { Client, Pool } = require("pg");

const pool = new Pool({
  user: "node_user",
  host: "localhost",
  database: "db_node",
  password: "node_password",
  port: 5432,
});

const buscarTodos = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query({
      rowMode: "array",
      text: "SELECT * FROM users",
    });
    if (result.rows.length) {
      console.log("Numero de Registros encontrados: ", result.rowCount);
      console.log("Consulta realizada con: ", result.command);
      // listar los datos como filas
      for (let row of result.rows) {
        console.log(row);
      }
      // Resultados de las filas en una tabla
      console.table(result.rows);
      // Resultados de los nombres de columnas
      for (let field of result.fields) {
        console.log(field.name);
      }
      return result;
    }
    console.log("No se encontraron registros");
  } catch (error) {
    console.error(error.stack);
  } finally {
    await pool.end(); // Cerrando conexión
  }
};
buscarTodos();
