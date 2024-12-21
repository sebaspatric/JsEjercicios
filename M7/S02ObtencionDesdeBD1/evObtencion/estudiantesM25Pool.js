const { Pool } = require('pg');

// Crear el pool de conexiones
const pool = new Pool({
  user: 'node_user',
  host: 'localhost',
  database: 'practica_db',
  password: 'node_password',
  port: 5432,
});

// Consulta: Seleccionar todos los estudiantes mayores de 25 años
async function estudiantesMayoresDe25() {
  try {
    const res = await pool.query('SELECT * FROM estudiantes WHERE CAST(edad AS INTEGER) > 25');
    console.log('Estudiantes mayores de 25 años:', res.rows);
  } catch (err) {
    console.error('Error al ejecutar la consulta:', err.stack);
  }
}

// Ejecutar la consulta
estudiantesMayoresDe25().finally(() => pool.end());
