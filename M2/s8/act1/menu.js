// salir en la opcion 5
let opcion;
// funcion mostrar menu

function mostrarMenu() {
    do {
        console.log("1. Agregar un elemento");
        console.log("2. Mostrar los elementos");
        console.log("3. Buscar un elemento");
        console.log("4. Modificar un elemento");
        console.log("5. Salir");
        opcion = parseInt(prompt("Ingrese una opción: "));
    } while (isNaN(opcion) || opcion < 1 || opcion > 5);
    
    switch (opcion) {
        case 1:
            agregarElemento();
            mostrarMenu();
            break;
        case 2:
            mostrarElementos();
            mostrarMenu();
            break;
        case 3:
            buscarElemento();
            mostrarMenu();
            break;
        case 4:
            modificarElemento();
            mostrarMenu();
            break;
        case 5:
            console.log("Gracias por usar este programa.");
            break;
        default:
            console.log("Opción no válida. Intente nuevamente.");
    }
}


function agregarElemento() {
    const nombre = prompt("Ingrese el nombre del elemento: ");
    const cantidad = parseInt(prompt("Ingrese la cantidad del elemento: "));
    
    if (nombre === "" || isNaN(cantidad)) {
        console.log("Los datos ingresados no son válidos.");
        return;
    }
    
    const elemento = { nombre, cantidad };
    elementos.push(elemento);
    console.log("Elemento agregado correctamente.");
}

function mostrarElementos() {
    if (elementos.length === 0) {
        console.log("No hay elementos en la lista.");
        return;
    }
    
    console.log("Elementos en la lista:");
    elementos.forEach(elemento => {
        console.log(`${elemento.nombre}: ${elemento.cantidad}`);
    });
}

function buscarElemento() {
    const nombre = prompt("Ingrese el nombre del elemento a buscar: ");
    
    if (nombre === "") {
        console.log("Debe ingresar un nombre.");
        return;
    }
    
    const elementoEncontrado = elementos.find(elemento => elemento.nombre === nombre);
    
    if (elementoEncontrado) {
        console.log(`Elemento encontrado: ${elementoEncontrado.nombre} - ${elementoEncontrado.cantidad}`);
    } else {
        console.log("Elemento no encontrado.");
    }
}

function modificarElemento() {
    const nombre = prompt("Ingrese el nombre del elemento a modificar: ");
    
    if (nombre === "") {
        console.log("Debe ingresar un nombre.");
        return;
    }
    
    const elementoEncontrado = elementos.find(elemento => elemento.nombre === nombre);
    
    if (elementoEncontrado) {
        const nuevaCantidad = parseInt(prompt("Ingrese la nueva cantidad del elemento: "));
        
        if (isNaN(nuevaCantidad)) {
            console.log("La cantidad ingresada no es válida.");
            return;
        }
        
        elementoEncontrado.cantidad = nuevaCantidad;
        console.log("Elemento modificado correctamente.");
    } else {
        console.log("Elemento no encontrado.");
    }
}

// elimnar elemento

function eliminarElemento() {
    const nombre = prompt("Ingrese el nombre del elemento a eliminar: ");
    
    if (nombre === "") {
        console.log("Debe ingresar un nombre.");
        return;
    }
    
    const elementoEncontrado = elementos.find(elemento => elemento.nombre === nombre);
    
    if (elementoEncontrado) {
        const indice = elementos.indexOf(elementoEncontrado);
        elementos.splice(indice, 1);
        console.log("Elemento eliminado correctamente.");
    } else {
        console.log("Elemento no encontrado.");
    }
}

// inicializar lista de elementos

const elementos = [
    { nombre: "Elemento 1", cantidad: 10 },
    { nombre: "Elemento 2", cantidad: 5 },
    { nombre: "Elemento 3", cantidad: 20 }
];

// mostrar lista inicial

console.log("Elementos en la lista inicial:");
elementos.forEach(elemento => {
    console.log(`${elemento.nombre}: ${elemento.cantidad}`);
});

//llmar el menu
let llamada = prompt("llamando al menu\nEscriba y para iniciar el menu o cualquier tecla para salir");
if  (llamada == "y")
    mostrarMenu();
else
    console.log("Gracias por usar este programa.");

