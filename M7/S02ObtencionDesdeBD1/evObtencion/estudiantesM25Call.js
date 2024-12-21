const { Client } = require('pg');

const cliente = new Client({
  user: 'node_user',
  host: 'localhost',
  database: 'practica_db',
  password: 'node_password',
  port: 5432,
});

cliente.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.stack);
    return;
  }
  console.log('Conexión exitosa a la base de datos.');

  const consulta = 'SELECT * FROM estudiantes WHERE CAST(edad AS INTEGER) > 25;';
  
  cliente.query(consulta, (err, res) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err.stack);
    } else {
      console.log('Estudiantes mayores de 25 años:', res.rows);
    }
    cliente.end();
  });
});
