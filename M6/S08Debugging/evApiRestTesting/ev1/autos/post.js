const fs = require('fs/promises');
const { v4: uuidv4 } = require('uuid');

async function agregarAuto(req, res) {
    try {
        const data = await fs.readFile('autos.txt', 'utf8');
        const autos = JSON.parse(data);
        const id = uuidv4();
        let nuevoAuto;

        req.on('data', (chunk) => {
            nuevoAuto = JSON.parse(chunk);
        });

        req.on('end', async () => {
            autos[id] = nuevoAuto;
            await fs.writeFile('autos.txt', JSON.stringify(autos, null, 2));
            res.writeHead(201, { 'Content-Type': 'text/plain' });
            res.write('Auto agregado exitosamente.');
            res.end();
        });
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Error al agregar el auto.');
        res.end();
    }
}

module.exports = agregarAuto;
