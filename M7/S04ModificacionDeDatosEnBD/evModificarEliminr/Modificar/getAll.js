const pool = require('./dataBase.js'); // Importar la conexión del pool

async function getAll() {
  try {
    // Obtener todos los estudiantes
    const estudiantesResult = await pool.query('SELECT * FROM estudiantes');
    console.log('Estudiantes:');
    console.table(estudiantesResult.rows);

    // Obtener todos los cursos
    const cursosResult = await pool.query('SELECT * FROM cursos');
    console.log('\nCursos:');
    console.table(cursosResult.rows);
  } catch (e) {
    console.error('Error al obtener los registros:', e.message);
  } finally {
    // Cerrar el pool
    await pool.end();
    console.log('Conexión cerrada.');
  }
}

getAll();

//node getAll.js
