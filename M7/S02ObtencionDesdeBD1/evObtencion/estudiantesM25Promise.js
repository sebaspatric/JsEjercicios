const { Client } = require('pg');

const cliente = new Client({
  user: 'node_user',
  host: 'localhost',
  database: 'practica_db',
  password: 'node_password',
  port: 5432,
});

cliente.connect()
  .then(() => {
    console.log('Conexión exitosa a la base de datos.');

    const consulta = 'SELECT * FROM estudiantes WHERE CAST(edad AS INTEGER) > 25;';
    return cliente.query(consulta);
  })
  .then((res) => {
    console.log('Estudiantes mayores de 25 años:', res.rows);
  })
  .catch((err) => {
    console.error('Error al ejecutar la consulta:', err.stack);
  })
  .finally(() => {
    cliente.end();
  });
