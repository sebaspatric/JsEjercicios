const { pool } = require("./dataBase");

async function getAll() {
  // Obtenemos el nombre de la tabla pasado como parámetro
  const [tableName] = process.argv.slice(2);

// Verificamos si el parámetro es válido
if (tableName !== "cuentas" && tableName !== "cuentas_nva" && tableName !== "historicos_tx") {
    console.error("Por favor, pasa 'cuentas', 'cuentas_nva' o 'historicos_tx' como parámetro.");
    pool.end();
    return;
  }

  try {
    // Realizamos la consulta dependiendo de la tabla pasada como parámetro
    const res = await pool.query(`SELECT * FROM "${tableName}"`);

    // Mostramos los resultados en formato de tabla
    console.table(res.rows);
  } catch (error) {
    console.error("Error al obtener los registros:", error);
  } finally {
    // Cerramos la conexión
    pool.end();
  }
}

// Llamamos a la función
getAll();
