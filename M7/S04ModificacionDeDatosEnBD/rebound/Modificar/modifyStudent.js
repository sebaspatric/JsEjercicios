const pool = require('./dataBase.js'); // Asegúrate de que `dataBase.js` exporte el pool

async function modifyStudent() {
  const [id, nombres, apellidos, edad, nro_identificacion] = process.argv.slice(2);
  try {
    const res = await pool.query(
      'UPDATE estudiantes SET nombres = $1, apellidos = $2, edad = $3, nro_identificacion = $4 WHERE id = $5',
      [nombres, apellidos, edad, nro_identificacion, id]
    );

    if (res.rowCount > 0) {
      console.log(`El estudiante con ID ${id} ha sido actualizado.`);
    } else {
      console.log(`No se encontró un estudiante con ID ${id}.`);
    }
  } catch (e) {
    console.error('Error al modificar el estudiante:', e.message);
  } finally {
    // Cerrar el pool
    await pool.end();
  }
}

modifyStudent();
//node modifyStudent.js 1 Jorge Actualizado 20 123456789
