const { Pool } = require("pg");
const pool = new Pool({
  user: "node_user",
  host: "localhost",
  database: "db_node",
  password: "node_password",
  port: 5432,
});
// Creamos el Objeto
const query = {
  text: "SELECT * FROM users WHERE age > $1",
  values: [30],
  rowMode: "array", // Definiendo modo fila
};
// Realizamos la consulta con el Objeto query
pool.query(query, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
  // Cerramos el pool después de la consulta
  pool.end().then(() => {
    console.log("Conexión cerrada correctamente.");
  });
});
