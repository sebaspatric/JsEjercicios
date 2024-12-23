const { Pool } = require('pg');
const cTable = require('console.table'); // Importar el paquete

// Crear un pool de conexiones
const pool = new Pool({
  user: 'node_user',
  host: 'localhost',
  database: 'practica_db',
  password: 'node_password',
  port: 5432,
});

// Mapa de códigos de error y sus descripciones
const errorMessages = {
  "08003": "connection_does_not_exist",
  "08006": "connection_failure",
  "2F002": "modifying_sql_data_not_permitted",
  "57P03": "cannot_connect_now",
  "42601": "syntax_error",
  "42501": "insufficient_privilege",
  "42602": "invalid_name",
  "42622": "name_too_long",
  "42939": "reserved_name",
  "42703": "undefined_column",
  "42000": "syntax_error_or_access_rule_violation",
  "42P01": "undefined_table",
  "42P02": "undefined_parameter",
};

// Función para procesar errores
function handleError(err) {
  const message = errorMessages[err.code] || "Error desconocido";
  console.error(`Error (${err.code}): ${message}`);
}

// Función para realizar consultas y procesar resultados
async function realizarConsultas() {
  try {
    console.log("Iniciando consultas...");

    // 1. Seleccionar todos los estudiantes mayores de 25 años
    try {
      const resultEstudiantesMayores = await pool.query(
        'SELECT * FROM estudiantes WHERE CAST(edad AS INTEGER) > 25;'
      );
      console.log('Estudiantes mayores de 25 años:');
      console.table(resultEstudiantesMayores.rows);
    } catch (err) {
      handleError(err);
    }

    // 2. Seleccionar todos los estudiantes y ordenar por apellido en forma descendente
    try {
      const resultEstudiantesOrdenados = await pool.query(
        'SELEC * FROM estudiantes ORDER BY apellidos DESC;' //con error
      );
      console.log('\nEstudiantes ordenados por apellido descendente:');
      console.table(resultEstudiantesOrdenados.rows);
    } catch (err) {
      handleError(err);
    }

    // 3. Seleccionar todos los cursos disponibles
    try {
      const resultCursos = await pool.query('SELECT * FROM cursos2;'); //con error
      console.log('\nCursos disponibles:');
      console.table(resultCursos.rows);
    } catch (err) {
      handleError(err);
    }

  } catch (generalError) {
    console.error('Error inesperado:', generalError.message);
  } finally {
    // Cerrar la conexión del pool
    await pool.end();
    console.log('Conexión cerrada.');
  }
}

// Ejecutar las consultas
realizarConsultas();
