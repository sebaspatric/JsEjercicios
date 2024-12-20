const fs = require('fs/promises');

async function obtenerComics(req, res) {
    try {
        const data = await fs.readFile('comics.txt', 'utf8');
        const comics = JSON.parse(data);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(comics, null, 2));
        res.end();
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Error al leer el archivo de comics.');
        res.end();
    }
}

module.exports = obtenerComics;
