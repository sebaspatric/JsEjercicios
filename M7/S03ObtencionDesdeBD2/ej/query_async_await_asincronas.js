const { Client, Pool } = require("pg");

const cliente = new Client({
  user: "node_user",
  host: "localhost",
  database: "db_node",
  password: "node_password",
  port: 5432,
});
// Como Cliente
async function buscarTodos() {
  try {
    await cliente.connect();
    const res = await cliente.query("SELECT * FROM users");
    for (let row of res.rows) {
      console.log(row);
    }
    return res;
    cliente.end();
  } catch (err) {
    console.error(err);
  }
}
buscarTodos().then((res) =>
  console.log("Se mostraron todos los registros de usuarios")
);
