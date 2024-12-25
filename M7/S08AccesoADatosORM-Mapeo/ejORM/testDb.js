const { pool } = require('./dataBase');

async function testConnection() {
  try {
    // Prueba la conexión realizando una consulta simple
    const result = await pool.query('SELECT NOW()');
    console.log('Conexión exitosa:', result.rows[0].now);
  } catch (error) {
    console.error('Error de conexión:', error);
  } finally {
    // Cierra el pool de conexiones
    await pool.end();
  }
}

testConnection();
