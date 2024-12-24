const { pool } = require("./dataBase");
// Crear la tabla 'cuentas_nva'
const query = `
CREATE TABLE IF NOT EXISTS "cuentas_nva" (
  "id" SERIAL PRIMARY KEY,
  "nombre" VARCHAR(50) NOT NULL,
  "balance" DEC(15,2) NOT NULL
);
`;

async function createCuentasNvaQuery() {
  try {
    const res = await pool.query(query);
    console.table(res);
    console.log("Se creo satisfactoriamente la tabla cuentas");
  } catch (error) {
    console.error(error);
  }
}
createCuentasNvaQuery();
