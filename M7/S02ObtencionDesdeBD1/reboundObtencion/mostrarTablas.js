const { Client } = require("pg");

// Conexión a la base de datos 'practica_db'
const cliente = new Client({
  user: "node_user",  // Usuario de la base de datos
  host: "localhost",
  database: "practica_db",  // Nombre de la base de datos
  password: "node_password",  // Contraseña de la base de datos
  port: 5432,  // Puerto de conexión
});

// Conectar al cliente
cliente.connect(err => {
  if (err) {
    console.error("Error al conectar:", err.stack);
    return;
  }
  console.log("Conexión exitosa a la base de datos practica_db.");
});

// Consulta para obtener las tablas
const queryTablas = `SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';`;

// Ejecutar consulta para obtener las tablas
cliente.query(queryTablas, (err, res) => {
  if (err) {
    console.error("Error al obtener las tablas:", err.stack);
    cliente.end();
    return;
  }

  console.log("Tablas en la base de datos:");
  console.table(res.rows);  // Muestra la lista de tablas

  // Para cada tabla, mostrar su contenido
  res.rows.forEach((tabla) => {
    const nombreTabla = tabla.table_name;
    const queryContenido = `SELECT * FROM ${nombreTabla};`;

    // Consultar el contenido de cada tabla
    cliente.query(queryContenido, (err, resContenido) => {
      if (err) {
        console.error(`Error al obtener los datos de la tabla ${nombreTabla}:`, err.stack);
      } else {
        console.log(`\nContenido de la tabla ${nombreTabla}:`);
        console.table(resContenido.rows);  // Muestra el contenido de la tabla
      }
    });
  });

  // Cerrar la conexión después de obtener todos los datos
  setTimeout(() => {
    cliente.end(err => {
      if (err) {
        console.error("Error al cerrar la conexión:", err.stack);
      } else {
        console.log("Conexión cerrada.");
      }
    });
  }, 1000);  // Espera 1 segundo antes de cerrar la conexión (para permitir que las consultas se ejecuten)
});
