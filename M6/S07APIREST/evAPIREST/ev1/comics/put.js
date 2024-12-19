const fs = require('fs/promises');

async function actualizarComic(req, res) {
    const id = req.url.split('=')[1];
    try {
        const data = await fs.readFile('comics.txt', 'utf8');
        const comics = JSON.parse(data);
        let comicActualizado;
        req.on('data', (chunk) => {
            comicActualizado = JSON.parse(chunk);
        });
        req.on('end', async () => {
            if (comics[id]) {
                comics[id] = { ...comics[id], ...comicActualizado };
                await fs.writeFile('comics.txt', JSON.stringify(comics, null, 2));
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write('Comic actualizado exitosamente.');
                res.end();
            } else {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.write('Comic no encontrado.');
                res.end();
            }
        });
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Error al actualizar el comic.');
        res.end();
    }
}

module.exports = actualizarComic;
