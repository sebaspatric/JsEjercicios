const fs = require('fs');

// Define the routes
const textoLorem = fs.readFile('./lorem.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
    return data;

});    

console.log("Texto lorem");
console.log(textoLorem)