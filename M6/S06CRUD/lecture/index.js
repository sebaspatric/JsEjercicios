const yargs = require("yargs");

const holaConfig = {
  anigable: {
    describe: "Reaalizar un saludo amigable",
    alias: "a",
    demandOption: true,
  },
};
const despedirConfig = {
  gracioso: {
    describe: "Realizar un despedido gracioso",
    alias: "g",
  },
};

const funcionHola = (argv) => {
    console.log(argv.amigable);
}
const funcionDespedir = (argv) => {
    if (argv.gracioso) {
        return console.log("Hasta la vista, programababy");
    }
    console.log(`Hasta pronto!`);
}   

const argvs = yargs
.command('hola', 'Saludar al programador', holaConfig, (argv) => funcionHola(argv))
.command('despedir', 'Despide al programador', despedirConfig, (argv) => funcionDespedir(argv))
.help()
.locale('pirate')
.argv

// $ node index.js despedir
