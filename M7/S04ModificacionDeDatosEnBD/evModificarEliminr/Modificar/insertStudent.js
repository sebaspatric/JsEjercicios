const pool = require('./dataBase.js'); // Asegúrate de que `dataBase.js` exporte el pool

async function insertStudent() {
  const [nombres, apellidos, edad, nro_identificacion] = process.argv.slice(2);
  try {
    const res = await pool.query(
      'INSERT INTO estudiantes (nombres, apellidos, edad, nro_identificacion) VALUES ($1, $2, $3, $4)',
      [nombres, apellidos, edad, nro_identificacion]
    );
    console.log(`Se ha agregado el estudiante ${nombres} ${apellidos}.`);
  } catch (e) {
    console.error('Error al insertar el estudiante:', e.message);
  } finally {
    // Cerrar el pool
    await pool.end();
  }
}

insertStudent();
//node insertStudent.js Jorge Contreras 18 134534562
