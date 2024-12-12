const fs = require('fs');

// Define the routes
fs.readFile('texto1.txt', 'utf8', (err, texto1) => {
    if (err) throw err;
    fs.readFile(texto1, 'utf8', (err, texto2) => {
        if (err) throw err;
        fs.readFile(texto2, 'utf8', (err, texto3) => {
            if (err) throw err;
            console.log(texto3);
        });
        
    });
});

