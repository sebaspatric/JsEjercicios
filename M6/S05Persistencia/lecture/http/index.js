const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Servidor escuchando en el puerto 8080');
    res.write('Esta es la respuesta del servidor');
    res.end();
    process.exit();
});

server.listen(8081);
