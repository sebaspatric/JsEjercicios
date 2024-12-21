const { Pool } = require('pg');

// Crear el pool de conexiones
const pool = new Pool({
  user: 'node_user',
  host: 'localhost',
  database: 'practica_db',
  password: 'node_password',
  port: 5432,
});

const consultarEstudiantes = async ({ edadMinima }) => {
  try {
    const consulta = 'SELECT * FROM estudiantes WHERE CAST(edad AS INTEGER) > $1';
    const res = await pool.query(consulta, [edadMinima]);
    console.log(`Estudiantes mayores de ${edadMinima} años:`, res.rows);
  } catch (err) {
    console.error('Error al ejecutar la consulta:', err.stack);
  }
};

// Ejecutar la consulta utilizando un objeto
consultarEstudiantes({ edadMinima: 25 }).finally(() => pool.end());
