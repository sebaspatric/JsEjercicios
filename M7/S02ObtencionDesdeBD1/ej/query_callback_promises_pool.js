const { Pool } = require("pg");
const pool = new Pool({
  user: "node_user",
  host: "localhost",
  database: "db_node",
  password: "node_password",
  port: 5432,
});
// Consulta con callback
console.log("Consulta con Callback");
pool.query("SELECT * FROM users WHERE id = 1", (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
    //pool.end(); // Cerrando la conexión
  }
});
// Consulta con promises
console.log("Consulta con Promesas");
pool.query("SELECT * FROM users WHERE id = 4").then((res) => {
  console.log(res.rows);
  pool.end().then(() => {
    console.log("Conexión cerrada");
  }); // Cerrando la conexión
});
