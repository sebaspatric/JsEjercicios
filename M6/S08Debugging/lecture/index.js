//const http = require('http');
import http from 'http';

// Crear server
const servidor = http.createServer((req, res) => {
	res.statusCode = 201;
	res.write('Respuesta desde el servidor');
	res.end();
});


servidor.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

//module.exports = {servidor};
export { servidor };