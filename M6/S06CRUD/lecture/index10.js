const yargs = require('yargs');
const args = yargs
  .command('hola', 'Saludar al programador',{
    amigable: {
        describe: "Realizar un saludo amigable",
        alias: "a",
        demandOption: true
    }
  }, (argv) => {
    console.log(argv.amigable);
  }) //
  .help() //
  .argv //


// $ node index.js hola --amigable