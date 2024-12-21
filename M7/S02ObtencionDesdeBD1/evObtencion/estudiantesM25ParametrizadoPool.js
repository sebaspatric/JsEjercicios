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
async function estudiantesPorEdad(edadMinima) {
  try {
    const consulta = 'SELECT * FROM estudiantes WHERE CAST(edad AS INTEGER) > $1';
    const res = await pool.query(consulta, [edadMinima]);
    console.log('Estudiantes mayores de', edadMinima, 'años:', res.rows);
  } catch (err) {
    console.error('Error al ejecutar la consulta:', err.stack);
  }
}

// Ejecutar la consulta parametrizada
estudiantesPorEdad(25).finally(() => pool.end());
