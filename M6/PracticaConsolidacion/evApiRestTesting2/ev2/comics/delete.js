const fs = require('fs/promises');

async function eliminarComic(req, res) {
    const id = req.url.split('=')[1];
    try {
        const data = await fs.readFile('comics.txt', 'utf8');
        const comics = JSON.parse(data);
        if (comics[id]) {
            delete comics[id];
            await fs.writeFile('comics.txt', JSON.stringify(comics, null, 2));
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(`Comic con id ${id} eliminado exitosamente.`);
            res.end();
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('Comic no encontrado.');
            res.end();
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Error al eliminar el comic.');
        res.end();
    }
}

module.exports = eliminarComic;
