const { Pool } = require('pg');

// Crear el pool de conexiones
const pool = new Pool({
  user: 'node_user',
  host: 'localhost',
  database: 'practica_db',
  password: 'node_password',
  port: 5432,
});

function estudiantesOrdenadosPorApellidoCallback() {
  pool.query('SELECT * FROM estudiantes ORDER BY apellidos DESC', (err, res) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err.stack);
    } else {
      console.log('Estudiantes ordenados por apellido descendente:', res.rows);
    }
    pool.end();
  });
}

// Ejecutar la consulta con callback
estudiantesOrdenadosPorApellidoCallback();
