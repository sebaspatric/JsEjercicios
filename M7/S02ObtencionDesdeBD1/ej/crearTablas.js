// postgres=# CREATE ROLE node_user WITH LOGIN CREATEDB PASSWORD 'nod
// postgres=# CREATE DATABASE db_node OWNER node_user;

const { Client } = require("pg");

const cliente = new Client({
  user: "node_user",
  host: "localhost",
  database: "db_node",
  password: "node_password",
  port: 5432,
});

const createTableQuery = `
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    age INTEGER NOT NULL
);

INSERT INTO users (email, firstname, lastname, age) VALUES
('jose@test.com', 'José', 'Pérez', 25),
('pedro@test.com', 'Pedro', 'Pérez', 35),
('maria@test.com', 'Maria', 'Carmona', 28),
('jorge@test.com', 'Jorge', 'Garcia', 18),
('miguelp@test.com', 'Miguel', 'Pérez', 45),
('miguelp@test.com', 'Miguel', 'Pérez', 45)
ON CONFLICT DO NOTHING;
`;

cliente.connect()
  .then(() => {
    console.log("Conexión exitosa a la base de datos.");
    return cliente.query(createTableQuery);
  })
  .then(() => {
    console.log("Tabla 'users' creada y datos insertados correctamente.");
  })
  .catch(err => {
    console.error("Error ejecutando la consulta:", err.stack);
  })
  .finally(() => {
    cliente.end();
    console.log("Conexión cerrada.");
  });
