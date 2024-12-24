const { pool } = require("./dataBase");
// Crear la tabla 'historicos_tx'
const query = `
CREATE TABLE IF NOT EXISTS "historicos_tx" (
  "id" SERIAL PRIMARY KEY,
  "idCuenta" INT NOT NULL,
  "balance" DEC(15,2) NOT NULL,
  "fecha" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;
async function createHistoricosTxQuery() {
  try {
    const res = await pool.query(query);
    console.table(res);
    console.log("Se creo satisfactoriamente la tabla cuentas");
  } catch (error) {
    console.error(error);
  }
}
createHistoricosTxQuery();
