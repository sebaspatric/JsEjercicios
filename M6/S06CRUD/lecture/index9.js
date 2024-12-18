const yargs = require('yargs');
const args = yargs
  .command('hola', 'Saludar al programador',{
    amigable: {
        describe: "Realizar un saludo amigable",
        alias: "a"
    }
  }, (argv) => {
    console.log(argv.amigable? 'Hola, amiga!' : 'Hola!');
  }) //
  .help() //
  .argv //


// $ node index.js hola --amigable