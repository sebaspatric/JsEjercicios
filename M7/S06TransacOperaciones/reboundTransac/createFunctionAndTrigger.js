const { pool } = require("./dataBase.js");

async function createFunctionAndTrigger() {
  const createFunctionSQL = `
    CREATE OR REPLACE FUNCTION registrar_historico_tx()
    RETURNS TRIGGER AS $$
    BEGIN
      -- Insertar un registro en la tabla historicos_tx
      INSERT INTO "historicos_tx" ("idCuenta", "balance", "fecha")
      VALUES (NEW."id", NEW."balance", NOW());
      
      -- Retornar el nuevo registro actualizado
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
  `;

  const createTriggerSQL = `
    CREATE TRIGGER guardar_en_historico
    AFTER UPDATE OF "balance" ON "cuentas"
    FOR EACH ROW
    EXECUTE FUNCTION registrar_historico_tx();
  `;

  try {
    await pool.connect(); // Conectar a la base de datos

    // Crear la función
    await pool.query(createFunctionSQL);
    console.log("Función 'registrar_historico_tx' creada correctamente.");

    // Crear el trigger
    await pool.query(createTriggerSQL);
    console.log("Trigger 'guardar_en_historico' creado correctamente.");

  } catch (error) {
    console.error("Error al crear la función y el trigger:", error);
  } finally {
    pool.end(); // Cerrar la conexión
  }
}

createFunctionAndTrigger();
