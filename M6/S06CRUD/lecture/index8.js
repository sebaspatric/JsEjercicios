const yargs = require('yargs');
const args = yargs
  .command('hola', 'Saludar al programador',{
    amigable: {
        describe: "Realizar un saludo amigable",
        alias: "a"
    }
  }, (argv) => {
    if (argv.amigable) {
        return console.log("Hola amigo programador!");
    }
    console.log("Hola programador");

  }) //
  .help() //
  .argv //


// $ node index.js hola --amigable