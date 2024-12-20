const { getAllItems, addItem, updateItem, deleteItem } = require('./crudOperations');

async function handleRequest(req, res) {
    const { searchParams, pathname } = new URL(req.url, `http://${req.headers.host}`);
    const params = new URLSearchParams(searchParams);
    const resource = pathname.slice(1); // Obtiene 'comics' o 'autos'
    const fileName = `${resource}.txt`;

    try {
        if (req.method === 'GET') {
            const items = await getAllItems(fileName);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(items));
        } else if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', async () => {
                const item = JSON.parse(body);
                const id = await addItem(fileName, item);
                res.writeHead(201, { 'Content-Type': 'text/plain' });
                res.end(`Item added with id ${id}`);
            });
        } else if (req.method === 'PUT') {
            const id = params.get('id');
            if (!id) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('ID is required');
                return;
            }
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', async () => {
                const updatedItem = JSON.parse(body);
                await updateItem(fileName, id, updatedItem);
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(`Item with id ${id} updated`);
            });
        } else if (req.method === 'DELETE') {
            const id = params.get('id');
            if (!id) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('ID is required');
                return;
            }
            await deleteItem(fileName, id);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Item with id ${id} deleted`);
        } else {
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            res.end(`Method ${req.method} not allowed`);
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Server error: ${error.message}`);
    }
}

module.exports = handleRequest;
