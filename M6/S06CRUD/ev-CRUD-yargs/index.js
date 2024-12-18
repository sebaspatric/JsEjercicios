const yargs = require('yargs');
const { funcionCreate } = require('./create');
const { funcionRead } = require('./read');
const { funcionUpdate } = require('./update');
const { funcionDelete } = require('./delete');


const createConfig = {
    titulo: {
        describe: 'El nombre de la tarea a realizar',
        alias:  't',
        demandOption: true
    },
    contenido: {
        describe: 'El contenido de la tarea a realizar',
        alias:  'c',
        demandOption: true
    },
}

const updateConfig = {
    titulo: {
        describe: 'El nuevo nombre de la tarea',
        alias:  't'
    },
    contenido: {
        describe: 'El nuevo contenido de la tarea',
        alias:  'c'
    },
    id: {
        describe: 'El ID de la tarea a actualizar',
        alias:  'i',
        demandOption: true
    }
}

const deleteConfig = {
    id: {
        describe: 'El ID de la tarea a borrar',
        alias:  'i',
        demandOption: true
    }
}

const args = yargs
  .command('create', 'Crear una nueva tarea', createConfig, (argv) => funcionCreate(argv))
  .command('read', 'Mostrar todas las tareas', {}, () => funcionRead())
  .command('update', 'Actualizar una tarea existente', updateConfig, (argv) => funcionUpdate(argv))  
  .command('delete', 'Borrar una tarea existente', deleteConfig, (argv) => funcionDelete(argv))
  .help()
  .argv

// node index.js create --titulo="nueva tarea" --contenido="esta es una nueva tarea"
// node index.js update --i=6cF21f922 --c="Estudiando javascript del lado del cliente utilizaando frameworks"
// node index.js delete --id=15021f4e