const fs = require('fs/promises');

// Define the routes
//fs.readFile('texto1.txt', 'utf8', (err, texto1) => {
//    if (err) throw err;
//    fs.readFile(texto1, 'utf8', (err, texto2) => {
//        if (err) throw err;
//        fs.readFile(texto2, 'utf8', (err, texto3) => {
//            if (err) throw err;
//            console.log(texto3);
//        });
//        
//    });
//});
//

//fs.readFile('texto1.txt', 'utf8')
//    .then(texto1 => fs.readFile(texto1, 'utf8'))
//    .then(texto2 => fs.readFile(texto2, 'utf8'))
//    .then(texto3 => console.log(texto3))
//    .catch(err => console.error(err));

// Async/Await version
const asyncAwait = async () => {
    try {
        const texto1 = await fs.readFile('texto1.txt', 'utf8');
        const texto2 = await fs.readFile(texto1, 'utf8');
        const texto3 = await fs.readFile(texto2, 'utf8');
        console.log(texto3);
    } catch (err) {
        console.log("Ha ocurrido un error al leer el archivo");
        console.error(err);
    }
};

asyncAwait();

