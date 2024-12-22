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

  // Datos para insertar en la tabla 'estudiantes'
  const insertarEstudiantes = `
    INSERT INTO estudiantes (nombres, apellidos, edad, nro_identificacion) VALUES
      ('Jorge', 'Contreas', '18', 134534562),
      ('Maria', 'Dugarte', '21', 736534562),
      ('Pedro', 'Valera', '26', 524534562),
      ('Juan', 'Valenzuela', '22', 854534562),
      ('Gerardo', 'Carnacho', '42', 524534563),
      ('Valentina', 'Verna', '26', 452114874),
      ('Cristina', 'De Jesus', '28', 528934562),
      ('Betis', 'Carnargo', '32', 52434562),
      ('Lisbeth', 'Guterrez', '27', 15234554),
      ('Alfredo', 'Carnacaro', '39', 45212547);
  `;

  // Datos para insertar en la tabla 'cursos'
 const insertarCursos = `
   
 `;

  // Insertar los datos
  cliente.query(insertarEstudiantes, (err, res) => {
    if (err) {
      console.error("Error al insertar datos en 'estudiantes':", err.stack);
    } else {
      console.log("Datos insertados en 'estudiantes'.");
    }

    // Insertar datos en 'cursos' después de 'estudiantes'
    cliente.query(insertarCursos, (err, res) => {
      if (err) {
        console.error("Error al insertar datos en 'cursos':", err.stack);
      } else {
        console.log("Datos insertados en 'cursos'.");
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
});
