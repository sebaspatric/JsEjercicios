const fs = require('fs/promises');

async function obtenerAutos(req, res) {
    try {
        const data = await fs.readFile('autos.txt', 'utf8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(data);
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Error al leer el archivo de autos.');
    } finally {
        res.end();
    }
}

module.exports = obtenerAutos;
