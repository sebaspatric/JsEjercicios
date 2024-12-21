const { Client } = require("pg");
const cliente = new Client({
  user: "node_user",
  host: "localhost",
  database: "db_node",
  password: "node_password",
  port: 5432,
});
cliente.connect();
cliente.query("SELECT NOW() as now", (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows[0]);
  }
});
// Consulta con callback
cliente.query("SELECT * FROM users", (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
    cliente.end(); // Cerrando la conexión
  }
});
