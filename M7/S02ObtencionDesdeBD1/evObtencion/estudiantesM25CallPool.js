const { Pool } = require('pg');

// Crear el pool de conexiones
const pool = new Pool({
  user: 'node_user',
  host: 'localhost',
  database: 'practica_db',
  password: 'node_password',
  port: 5432,
});

function estudiantesConCallback() {
  pool.query('SELECT * FROM estudiantes WHERE CAST(edad AS INTEGER) > 25', (err, res) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err.stack);
    } else {
      console.log('Estudiantes mayores de 25 años:', res.rows);
    }
    pool.end();
  });
}

// Ejecutar la consulta con callback
estudiantesConCallback();

