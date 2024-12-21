const { Pool } = require('pg');

// Crear el pool de conexiones
const pool = new Pool({
  user: 'node_user',
  host: 'localhost',
  database: 'practica_db',
  password: 'node_password',
  port: 5432,
});

async function obtenerCursosDisponibles() {
  try {
    const res = await pool.query('SELECT * FROM cursos');
    console.log('Cursos disponibles:', res.rows);
  } catch (err) {
    console.error('Error al ejecutar la consulta:', err.stack);
  }
}

obtenerCursosDisponibles().finally(() => pool.end());
