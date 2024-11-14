//crear una función constructora “Tarea” para crear objetos de tipo Tarea con las propiedades “descripción” y “estado” que puede ser pendiente o completada
//como clase
//implementar funcion que permita agregar nuevaas tareas

const tareas = [];

class Tarea {
  constructor(descripcion, estado = "pendiente") {
    this.descripcion = descripcion;
    this.estado = estado;
  }

  //metodo para cambiar el estado de la tarea
  cambiarEstado() {
    this.estado = this.estado === "pendiente" ? "completada" : "pendiente";
  }
}

//funcion para agregar nueva tarea

function agregarTarea(descripcion) {
  const nuevaTarea = new Tarea(descripcion);
  tareas.push(nuevaTarea);
  console.log(`Tarea "${descripcion}" agregada.`);
}

//marcar tarea como completada

function marcarTareaComoCompletada(descripcion) {
  const index = tareas.findIndex((tarea) => tarea.descripcion === descripcion);
  if (index !== -1) {
    tareas[index].cambiarEstado();
    console.log(`Tarea "${descripcion}" marcada como completada.`);
  } else {
    console.log(`No se encontró la tarea "${descripcion}".`);
  }
}

// filtrar tareasa por estado

function filtrarTareasPorEstado(estado) {
  const tareasFiltradas = tareas.filter((tarea) => tarea.estado === estado);
  // imprimir por consola////////////////////
 
  console.log(`Tareas ${estado}:`);
  tareasFiltradas.forEach((tarea) => console.log(`- ${tarea.descripcion}`));
  ////////////////////////////////
// Crear una cadena de texto con las tareas para mostrar en el alert, con cada tarea en una nueva línea
const listaFiltradaTexto = tareasFiltradas.map(tarea => `- ${tarea.descripcion}`).join('\n');
  
// Mostrar la lista en un alert
alert(`Tareas ${estado}:\n${listaFiltradaTexto}`);  

return tareasFiltradas;
}

//mostrar total de tareas

function mostrarTotalTareas() {
  console.log(`Total de tareas: ${tareas.length}`);
  alert(` Total de tareas: ${tareas.length}`);
  return tareas.length;
}

//listar taareas

function listarTareas() {

  const listaDeTareas = tareas.map((tarea, index) => `${index + 1}. ${tarea.descripcion} - ${tarea.estado}`);
  listaDeTareas.forEach((tarea => console.log(tarea)));
  tareas.forEach((tarea => console.log(tarea)));
  alert(listaDeTareas.join('\n'));

  return listaDeTareas;
  
}

//implementaar un menu funcional paraa estas funciones

function menu() {
  console.log("Gestión de tareas");
  console.log("1. Agregar tarea");
  console.log("2. Marcar tarea como completada");
  console.log("3. Filtrar tareas por estado");
  console.log("4. Mostrar total de tareas");
  console.log("5. Listar tareas");
  console.log("6. Salir"); 
  
  
  
  const opcion = (
    prompt(`Ingrese una opción:\n
        (1) Agregar tarea
        (2) Marcar tarea como completada
        (3) Filtrar tareas por estado
        (4) Mostrar total de tareas
        (5) Listar tareas
        (6) Salir`)
  );
  if (opcion === null) {
    console.log('Saliendo...');
    return; // Terminar la función y salir
}
const opcionNumerica = parseInt(opcion);

  switch (opcionNumerica) {
    case 1:
      const descripcion = prompt("Ingrese la descripción de la tarea: ");
      agregarTarea(descripcion);
      break;
    case 2:
      const descripcionMarcar = prompt(
        "Ingrese la descripción de la tarea a marcar como completada: "
      );
      marcarTareaComoCompletada(descripcionMarcar);
      break;
    case 3:
      const estadoFiltrar = prompt(
        "Ingrese el estado (pendiente/completada) para filtrar: "
      );
      filtrarTareasPorEstado(estadoFiltrar);
      break;
    case 4:
      mostrarTotalTareas();
      break;
    case 5:
      listarTareas();
      break;
    case 6:
      console.log("Saliendo...");
      break;
    default:
      console.log("Opción inválida");
  }

  if (opcionNumerica !== 6) {
    menu();
  }
}

menu();
