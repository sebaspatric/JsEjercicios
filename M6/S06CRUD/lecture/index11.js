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
  .command('despedir', 'Despide al programador',{
    gracioso: {
        describe: "Realizar un despedido gracioso",
        alias: "g"
    }
       
  }, (argv) => {
    if (argv.gracioso) {
        return console.log("Hasta la vista, programador");
    }
    console.log("Hasta pronto !");
  })
  .help() //
  .argv //


// $ node index.js despedir