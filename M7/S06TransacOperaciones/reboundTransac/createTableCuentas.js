const { pool } = require("./dataBase");
const query = `
CREATE TABLE IF NOT EXISTS cuentas (
    "id"
    SERIAL,
    "nombre"
    VARCHAR(50) NOT NULL,
    "balance"
    DEC(15, 2) NOT NULL,
    PRIMARY KEY("id")
    );`;
async function createTableCuentas() {
  try {
    const res = await pool.query(query);
    console.table(res);
    console.log("Se creo satisfactoriamente la tabla cuentas");
  } catch (error) {
    console.error(error);
  }
}
createTableCuentas();
