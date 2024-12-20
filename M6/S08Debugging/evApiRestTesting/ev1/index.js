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
    const { pathname } = parse(req.url, true);

    switch (pathname) {
        case '/comics':
            if (req.method === 'GET') {
                obtenerComics(req, res);
            } else if (req.method === 'POST') {
                agregarComic(req, res);
            } else if (req.method === 'PUT') {
                actualizarComic(req, res);
            } else if (req.method === 'DELETE') {
                eliminarComic(req, res);
            } else {
                res.writeHead(405, { 'Content-Type': 'text/plain' });
                res.write('Método no permitido para /comics.');
                res.end();
            }
            break;

        case '/autos':
            if (req.method === 'GET') {
                obtenerAutos(req, res);
            } else if (req.method === 'POST') {
                agregarAuto(req, res);
            } else if (req.method === 'PUT') {
                actualizarAuto(req, res);
            } else if (req.method === 'DELETE') {
                eliminarAuto(req, res);
            } else {
                res.writeHead(405, { 'Content-Type': 'text/plain' });
                res.write('Método no permitido para /autos.');
                res.end();
            }
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('Ruta no encontrada.');
            res.end();
            break;
    }
}).listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000/');
});

module.exports = { servidor };
