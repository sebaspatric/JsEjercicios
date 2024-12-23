const pool = require('./dataBase.js');

async function deleteStudent() {
  const [id] = process.argv.slice(2);
  try {
    const res = await pool.query('DELETE FROM estudiantes WHERE id = $1', [id]);

    if (res.rowCount > 0) {
      console.log(`El estudiante con ID ${id} ha sido eliminado.`);
    } else {
      console.log(`No se encontró un estudiante con ID ${id}.`);
    }
  } catch (e) {
    console.error('Error al eliminar el estudiante:', e.message);
  } finally {
    // Cerrar el pool
    await pool.end();
  }
}

deleteStudent();

//node deleteStudent.js 17
