const yargs = require('yargs');
const args = yargs
  .command('hola', 'Saludar al programador',{
    amigable: {
        describe: "Realizar un saludo amigable",
        alias: "a"
    }
  }) //
  .help() //
  .argv //


// node index.js hola --help