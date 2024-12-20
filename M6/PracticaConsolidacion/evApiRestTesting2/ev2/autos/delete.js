const fs = require('fs/promises');

async function eliminarAuto(req, res) {
    const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
    const id = searchParams.get('id');

    try {
        const data = await fs.readFile('autos.txt', 'utf8');
        const autos = JSON.parse(data);

        if (autos[id]) {
            delete autos[id];
            await fs.writeFile('autos.txt', JSON.stringify(autos, null, 2));
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(`El auto con id ${id} ha sido eliminado exitosamente.`);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('Auto no encontrado.');
        }
        res.end();
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Error al eliminar el auto.');
        res.end();
    }
}

module.exports = eliminarAuto;
