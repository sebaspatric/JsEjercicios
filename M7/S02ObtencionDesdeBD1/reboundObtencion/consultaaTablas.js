const { Client } = require("pg");

// Configuración del cliente
const cliente = new Client({
  user: "node_user",
  host: "localhost",
  database: "practica_db",
  password: "node_password",
  port: 5432,
});

// Conexión al cliente
cliente.connect(err => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err.stack);
    return;
  }
  console.log("Conexión exitosa a la base de datos.");

  // Consulta para obtener las tablas de la base de datos
  const consultaTablas = `
    SELECT table_name 
    FROM information_schema.tables 
    WHERE table_schema = 'public';
  `;

  cliente.query(consultaTablas, (err, res) => {
    if (err) {
      console.error("Error al consultar las tablas:", err.stack);
    } else {
      console.log("Tablas encontradas:");
      res.rows.forEach(row => {
        console.log("- " + row.table_name);
      });
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
});
