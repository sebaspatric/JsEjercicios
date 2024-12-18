const yargs = require('yargs');

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
  .command('create', 'Crear una nueva tarea')
  .command('read', 'Mostrar todas las tareas')
  .command('update', 'Actualizar una tarea existente')  
  .command('delete', 'Borrar una tarea existente')
  .help()
  .argv
