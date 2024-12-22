const { Client } = require("pg");
const cliente = new Client({
  user: "node_user",
  host: "localhost",
  database: "db_node",
  password: "node_password",
  port: 5432,
});
cliente.connect();
cliente
  .query("SELECT NOW() as now")
  .then((res) => console.log(res.rows[0]))
  .catch((e) => console.error(e.stack));
// Consulta con promises
cliente.query("SELECT * FROM users").then((res) => {
  console.log(res.rows);
  cliente.end(); // Cerrando la conexión
});
