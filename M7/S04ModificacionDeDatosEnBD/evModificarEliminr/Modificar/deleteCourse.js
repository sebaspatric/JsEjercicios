const pool = require('./dataBase.js');

async function deleteCourse() {
  const [id] = process.argv.slice(2);
  try {
    const res = await pool.query('DELETE FROM cursos WHERE id = $1', [id]);

    if (res.rowCount > 0) {
      console.log(`El curso con ID ${id} ha sido eliminado.`);
    } else {
      console.log(`No se encontró un curso con ID ${id}.`);
    }
  } catch (e) {
    console.error('Error al eliminar el curso:', e.message);
  } finally {
    // Cerrar el pool
    await pool.end();
  }
}

deleteCourse();

//node deleteCourse.js 8
