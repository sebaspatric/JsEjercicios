const yargs = require('yargs');
const {v4: uuidv4} = require('uuid');
//const { readFile } = require('fs/promises');
//const fs = require('fs/promises');
const { readFile, writeFile } = require('fs/promises'); // Importar funciones basadas en promesas

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

const funcionCreate = async ({titulo, contenido})=> {   
    const id = uuidv4().slice(0,8);
    const nuevaTarea = {id: id, titulo: titulo, contenido: contenido};

    // Leer archivo y agregar nueva tarea

    //const tareas = await fs.readFile('tareas.txt');
    const tareas = await readFile('tareas.txt');
    const arrayTareas = JSON.parse(tareas);

    arrayTareas.push(nuevaTarea)
    //await fs.writeFile('tareas.txt', JSON.stringify(arrayTareas, null, 2));
    await writeFile('tareas.txt', JSON.stringify(arrayTareas, null, 2));
    console.log('Tarea creada con éxito!');
}

const funcionRead = async ()=> {
    const tareasArchivo = await readFile('tareas.txt');
    const arrayTareas = JSON.parse(tareasArchivo);
    //
    let contador = 0;

    for (tareas of arrayTareas) {
        const {titulo, contenido, id} = tareas;
        contador ++;
        console.log(`Tarea nro ${contador}`);
        console.log(`- Título: ${titulo}`);
        console.log(`- Contenido: ${contenido}`);
        console.log(`- ID: ${id}\n`);
    }
    //console.log(arrayTareas);
}

const funcionUpdate = async ({id, titulo, contenido}) => {
    const tareasArchivo = await readFile('tareas.txt');
    const arrayTareas = JSON.parse(tareasArchivo);
    const tareaActual = arrayTareas.findIndex(tarea => tarea.id === id);

    const tituloNuevo = titulo ? titulo: arrayTareas[tareaActual].titulo;
    const contenidoNuevo = contenido? contenido: arrayTareas[tareaActual].contenido;

    arrayTareas[tareaActual].titulo = tituloNuevo;
    arrayTareas[tareaActual].contenido = contenidoNuevo;

    await writeFile('tareas.txt', JSON.stringify(arrayTareas, null, 2));
    console.log('Tarea actualizada con éxito!');
} 

const funcionDelete = async ({id}) => {
    const tareasArchivo = await readFile('tareas.txt');
    const arrayTareas = JSON.parse(tareasArchivo);
   // const tareaBorrada = arrayTareas.findIndex(tarea => tarea.id === id);

    const nuevasTareas = arrayTareas.filter(tareas => tareas.id !== id);

    await writeFile('tareas.txt', JSON.stringify(nuevasTareas, null, 2));
    console.log('Tarea eliminada con éxito!');
    
}


const args = yargs
  .command('create', 'Crear una nueva tarea', createConfig, (argv) => funcionCreate(argv))
  .command('read', 'Mostrar todas las tareas', {}, (argv) => funcionRead())
  .command('update', 'Actualizar una tarea existente', updateConfig, (argv) => funcionUpdate(argv))  
  .command('delete', 'Borrar una tarea existente', deleteConfig, (argv) => funcionDelete(argv))
  .help()
  .argv

// node index.js create --titulo="nueva tarea" --contenido="esta es una nueva tarea"
// node index.js update --i=6cF21f922 --c="Estudiando javascript del lado del cliente utilizaando frameworks"
// node index.js delete --id =bcf77ffb 
