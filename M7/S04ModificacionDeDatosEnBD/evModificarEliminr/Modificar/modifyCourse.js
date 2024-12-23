const pool = require('./dataBase.js');

async function modifyCourse() {
  const [id, titulo, descripcion] = process.argv.slice(2);
  try {
    const res = await pool.query(
      'UPDATE cursos SET titulo = $1, descripcion = $2 WHERE id = $3',
      [titulo, descripcion, id]
    );

    if (res.rowCount > 0) {
      console.log(`El curso con ID ${id} ha sido actualizado.`);
    } else {
      console.log(`No se encontró un curso con ID ${id}.`);
    }
  } catch (e) {
    console.error('Error al modificar el curso:', e.message);
  } finally {
    // Cerrar el pool
    await pool.end();
  }
}

modifyCourse();

//node modifyCourse.js 1 "Nuevo titulo" "Nueva descripcion"
