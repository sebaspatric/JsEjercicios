const { Pool } = require('pg');
//const cTable = require('console.table'); // Importar el paquete

// Crear un pool de conexiones
const pool = new Pool({
  user: 'node_user',
  host: 'localhost',
  database: 'practica_db',
  password: 'node_password',
  port: 5432,
});

// Función para realizar consultas y procesar resultados
async function realizarConsultas() {
  try {
    // 1. Seleccionar todos los estudiantes mayores de 25 años
    const resultEstudiantesMayores = await pool.query(
      'SELECT * FROM estudiantes WHERE CAST(edad AS INTEGER) > 25;'
    );
    console.log('Estudiantes mayores de 25 años:');
    console.table(resultEstudiantesMayores.rows);

    // 2. Seleccionar todos los estudiantes y ordenar por apellido en forma descendente
    const resultEstudiantesOrdenados = await pool.query(
      'SELECT * FROM estudiantes ORDER BY apellidos DESC;'
    );
    console.log('\nEstudiantes ordenados por apellido descendente:');
    console.table(resultEstudiantesOrdenados.rows);

    // 3. Seleccionar todos los cursos disponibles
    const resultCursos = await pool.query('SELECT * FROM cursos;');
    console.log('\nCursos disponibles:');
    console.table(resultCursos.rows);
  } catch (err) {
    console.error('Error al procesar las consultas:', err.message);
  } finally {
    // Cerrar la conexión del pool
    await pool.end();
    console.log('Conexión cerrada.');
  }
}

// Ejecutar las consultas
realizarConsultas();
