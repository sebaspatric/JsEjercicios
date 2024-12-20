const fs = require('fs/promises');
const { v4: uuidv4 } = require('uuid');

async function agregarComic(req, res) {
    try {
        const data = await fs.readFile('comics.txt', 'utf8');
        const comics = JSON.parse(data);
        let nuevoComic;
        req.on('data', (chunk) => {
            nuevoComic = JSON.parse(chunk);
        });
        req.on('end', async () => {
            const id = uuidv4();
            comics[id] = nuevoComic;
            await fs.writeFile('comics.txt', JSON.stringify(comics, null, 2));
            res.writeHead(201, { 'Content-Type': 'text/plain' });
            res.write('Comic agregado exitosamente.');
            res.end();
        });
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Error al agregar el comic.');
        res.end();
    }
}

module.exports = agregarComic;
