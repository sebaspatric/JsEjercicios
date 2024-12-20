const { Client } = require("pg");
const credenciales = {
  user: "postgres",
  database: "nodedemo",
  password: "yourpassword",
  port: 5432,
  host: "localhost",
};
async function clientDemo() {
  const client = new Client(credenciales);
  await client.connect();
  const now = await client.query("SELECT NOW()");
  await client.end();
  return now;
}
