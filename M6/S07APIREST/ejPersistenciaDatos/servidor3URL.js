const http = require('http');
const fs = require('fs/promises');
const { v4: uuidv4 } = require('uuid');

http.createServer(async(req, res) => {
    //console.log(req.url);
    //console.log(req.headers.host);
    //const url = new URL(req.url, `http://${req.headers.host}`);
    const { searchParams, pathname } = new URL(req.url,`http://${req.headers.host}`);
    const params = new URLSearchParams(searchParams);
    console.log(pathname);
    if (pathname == '/comics' && req.method == 'GET') {
        const lecturaArchivo = await fs.readFile('comics.txt');
        res.write(lecturaArchivo);
        res.end();
    }
    if (pathname == '/comics' && req.method == 'POST'){
        const archivoOriginal = await fs.readFile('comics.txt');
        const datosOriginales = JSON.parse(archivoOriginal);
        //console.log(daatosOriginales);
        const id = uuidv4();
        let datosComic;
        req.on('data', (data) => {
            datosComic = JSON.parse(data);
            console.log(datosComic);
        })
        req.on('end', async() => {
            datosOriginales[id] = datosComic;
            console.log(datosOriginales);
            await fs.writeFile('comics.txt', JSON.stringify(datosOriginales, null, 2));
            res.write("Comic agregado exitosamente");
            res.end();
        })
        
    }
    if (pathname == '/comics' && req.method == 'PUT'){
        const id = params.get('id');
        const datosArchivo = await fs.readFile('comics.txt');
        const objetoArchivoOriginal = JSON.parse(datosArchivo);
        let datosParaModificar;
        req.on('data', (data) => {
            datosParaModificar = JSON.parse(data);
            //console.log(datosParaModificar);
        })
        req.on('end', async () => {
            const comicOriginal = objetoArchivoOriginal[id]
            const comicActualizado = {...comicOriginal, ...datosParaModificar}
            objetoArchivoOriginal[id] = comicActualizado;
            await fs.writeFile('comics.txt', JSON.stringify(objetoArchivoOriginal, null, 2));
            //res.write(JSON.stringify(comicActualizado, null, 2));
            res.write(`Los datos han sido modificados exitosamente`);
            res.end();
        })
        //res.write(params.get('id'));
        //res.end();
    }
    if (pathname == '/comics' && req.method == 'DELETE'){
        const comicOriginales = await fs.readFile('comics.txt', 'utf8');
        const objetoComicsOriginal = JSON.parse(comicOriginales);
        const id = params.get('id');
        delete objetoComicsOriginal[id];

        //res.write(JSON.stringify(objetoComicsOriginal, null, 2));
        await fs.writeFile('comics.txt', JSON.stringify(objetoComicsOriginal, null, 2));
        res.write(`El comic con id ${id} ha sido eliminado exitosamente`);
        res.end();
    }
}).listen(3000, function () {
    console.log('Server running at http://localhost:3000/');
    });