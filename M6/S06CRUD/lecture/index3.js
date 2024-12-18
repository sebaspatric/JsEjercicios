const yargs = require('yargs');
const args = yargs
  .command('hola', 'Saludar al programador') //
  .help() //
  .argv //


  // node index.js --help