const yargs = require('yargs');
const args = yargs
  .command('hola', 'Saludar al programador',{
    amigable: {
        describe: "Reaalizar un saludo amigable"
    }
  }) //
  .help() //
  .argv //


// node index.js --help