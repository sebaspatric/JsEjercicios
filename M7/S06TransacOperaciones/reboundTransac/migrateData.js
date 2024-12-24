// migrateData.js
const { pool } = require("./dataBase.js");

async function migrateData() {
  await pool.connect(); // Conectar a la base de datos

  try {
    // Inicio de la transacción
    await pool.query("BEGIN");

    try {
      // Seleccionar todos los datos de la tabla 'cuentas'
      const { rows } = await pool.query('SELECT * FROM "cuentas"');

      // Verificar si hay datos para migrar
      if (rows.length > 0) {
        // Insertar los datos en la tabla 'cuentas_nva'
        for (let i = 0; i < rows.length; i++) {
          const { id, nombre, balance } = rows[i];
          
          // Insertar en la tabla 'cuentas_nva'
          await pool.query(
            'INSERT INTO "cuentas_nva" ("id", "nombre", "balance") VALUES ($1, $2, $3)',
            [id, nombre, balance]
          );
        }

        console.log("Datos migrados exitosamente de 'cuentas' a 'cuentas_nva'.");
      } else {
        console.log("No hay datos en la tabla 'cuentas' para migrar.");
      }

      // Confirmar la transacción
      await pool.query("COMMIT");
    } catch (error) {
      // Si ocurre un error, revertir todo
      await pool.query("ROLLBACK");
      console.error("Error durante la migración de datos:", error.stack);
    }
  } finally {
    // Finaliza la conexión
    pool.end();
  }
}

// Ejecutar la migración
migrateData();
