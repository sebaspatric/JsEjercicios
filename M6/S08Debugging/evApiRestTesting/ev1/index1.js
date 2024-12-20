const http = require('http');
const { parse } = require('url');
const obtenerComics = require('./comics/get');
const agregarComic = require('./comics/post');
const actualizarComic = require('./comics/put');
const eliminarComic = require('./comics/delete');
const obtenerAutos = require('./autos/get');
const agregarAuto = require('./autos/post');
const actualizarAuto = require('./autos/put');
const eliminarAuto = require('./autos/delete');

const servidor = http.createServer((req, res) => {
    const { pathname, searchParams } = parse(req.url, true);

    // Rutas para "comics"
    if (pathname === '/comics' && req.method === 'GET') {
        obtenerComics(req, res);
    } else if (pathname === '/comics' && req.method === 'POST') {
        agregarComic(req, res);
    } else if (pathname === '/comics' && req.method === 'PUT') {
        actualizarComic(req, res);
    } else if (pathname === '/comics' && req.method === 'DELETE') {
        eliminarComic(req, res);
    }
    // Rutas para "autos"
    else if (pathname === '/autos' && req.method === 'GET') {
        obtenerAutos(req, res);
    } else if (pathname === '/autos' && req.method === 'POST') {
        agregarAuto(req, res);
    } else if (pathname === '/autos' && req.method === 'PUT') {
        actualizarAuto(req, res);
    } else if (pathname === '/autos' && req.method === 'DELETE') {
        eliminarAuto(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Ruta no encontrada.');
        res.end();
    }
}).listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000/');
});
module.exports = { servidor };
