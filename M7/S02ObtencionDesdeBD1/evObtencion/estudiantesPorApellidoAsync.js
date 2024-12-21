const { Pool } = require('pg');

// Crear el pool de conexiones
const pool = new Pool({
  user: 'node_user',
  host: 'localhost',
  database: 'practica_db',
  password: 'node_password',
  port: 5432,
});
async function estudiantesOrdenadosPorApellido() {
  try {
    const res = await pool.query('SELECT * FROM estudiantes ORDER BY apellidos DESC');
    console.log('Estudiantes ordenados por apellido descendente:', res.rows);
  } catch (err) {
    console.error('Error al ejecutar la consulta:', err.stack);
  }
}

estudiantesOrdenadosPorApellido().finally(() => pool.end());
