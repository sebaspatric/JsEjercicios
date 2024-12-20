const { Pool } = require("pg");
const credenciales = {
  user: "postgres",
  database: "nodedemo",
  password: "yourpassword",
  port: 5432,
  host: "localhost",
};
async function poolDemo() {
  const pool = new Pool(credenciales);
  const now = await pool.query("SELECT NOW()");
  await pool.end();
  return now;
}
