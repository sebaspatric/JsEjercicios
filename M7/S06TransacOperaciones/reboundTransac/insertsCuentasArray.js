const { pool } = require("./dataBase.js");
var format = require("pg-format");
const registros = [
  ["Jose", 1000],
  ["Pedro", 2000],
  ["Maria", 3000],
  ["Antonny", 4000],
  ["Marcos", 5000],
  ["Juan", 6000],
  ["William", 7000],
  ["Miguel", 8000],
  ["Alberto", 9000],
  ["Carlos", 10000],
  ["Carolina", 11000],
  ["Julián", 12000],
  ["Fernanda", 13000],
];
async function insertsCuentas() {
  try {
    const result = await pool.query(
      format("INSERT INTO cuentas (nombre, balance) VALUES %L", registros)
    );
    if (result.err) {
      console.log(result.err);
      return result.err;
    }
    console.table(
      `Se ejecuto el comando: ` +
        result.command +
        `con ` +
        result.rowCount +
        ` inserciones`
    );
    console.table(registros);
  } catch (error) {
    console.error(error);
  }
}
insertsCuentas();
//npm install pg-format

//node insertsCuentasArray.js