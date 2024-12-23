const pool = require('./dataBase.js'); // Asegúrate de que `dataBase.js` exporte el pool

async function insertCourse() {
  const [titulo, descripcion] = process.argv.slice(2);
  try {
    const res = await pool.query(
      'INSERT INTO cursos (titulo, descripcion) VALUES ($1, $2)',
      [titulo, descripcion]
    );
    console.log(`Se ha agregado el curso "${titulo}".`);
  } catch (e) {
    console.error('Error al insertar el curso:', e.message);
  } finally {
    // Cerrar el pool
    await pool.end();
  }
}

insertCourse();
//node insertCourse.js "Programacion 1" "Descripcion de programacion 1"
