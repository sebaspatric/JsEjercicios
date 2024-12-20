//crear la base de datos en postgresSQL
// psql -U postgres
// ALTER ROLE node_user CREATEDB;
// CREATE DATABASE practica_db OWNER node_user;
// \l


const { Client } = require("pg");

// Conexión a la base de datos creada
const cliente = new Client({
  user: "node_user", // Usuario con permisos para conectarse a practica_db
  host: "localhost",
  database: "practica_db", // Base de datos creada en PostgreSQL
  password: "node_password", // Contraseña del usuario
  port: 5432, // Puerto del servidor
});

// Conexión al cliente
cliente.connect(err => {
  if (err) {
    console.error("Error al conectar:", err.stack);
    return;
  }
  console.log("Conexión exitosa a la base de datos practica_db.");
});

// Consulta SQL para crear las tablas
const sql = `
  CREATE TABLE IF NOT EXISTS estudiantes (
    id SERIAL PRIMARY KEY,
    nombres VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    edad VARCHAR(50) NOT NULL,
    nro_identificacion INTEGER UNIQUE NOT NULL
  );

  CREATE TABLE IF NOT EXISTS cursos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(80) NOT NULL,
    descripcion VARCHAR(80) NOT NULL
  );
`;

// Ejecutar la consulta
cliente.query(sql, (err, res) => {
  if (err) {
    console.error("Error al crear las tablas:", err.stack);
  } else {
    console.log("Tablas creadas con éxito.");
  }

  // Cerrar la conexión
  cliente.end(err => {
    if (err) {
      console.error("Error al cerrar la conexión:", err.stack);
    } else {
      console.log("Conexión cerrada.");
    }
  });
});
