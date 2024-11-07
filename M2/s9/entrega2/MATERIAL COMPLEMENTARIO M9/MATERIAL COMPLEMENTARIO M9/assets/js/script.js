var tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
];

const botonAgregarTarea = document.querySelector(".btn-success");
const formulario = document.getElementById("formulario");
const inputTarea = document.getElementById("nuevaTarea");
const cuerpoTabla = document.getElementById("cuerpo-tabla");
const botonFormulario = document.querySelector(".btn-primary");


// inicializa el formulario como oculto
formulario.style.display = "none";

// funcion alternar formulario de agregar tarea
function alternarFormulario() {
    formulario.style.display = formulario.style.display === "none"? "block" : "none";
}

// Función para agregar tarea a la lista y actualizar la table
function agregarTarea() {
    const nuevaTarea = inputTarea.value.trim();
    if (nuevaTarea) {
        tareas.push({ tarea: nuevaTarea });
        actualizarTabla();
        inputTarea.value = "";
        formulario.style.display = "none";
    } else {
        alert("Por favor, ingrese una tarea válida.");
    }
}

// función para renderizar la tabla con las tareas
function actualizarTabla(){
    cuerpoTabla.innerHTML = "";
    tareas.forEach((item, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
        <td>${item.tarea}</td>
        <td><button class="btn btn-danger" onclick="eliminarTarea(${index})">Finalizar</button></td>   
        `;
        cuerpoTabla.appendChild(fila);
    });
}   

// Función para eliminar una tarea de la lista
function eliminarTarea(index) {
    tareas.splice(index, 1);
    actualizarTabla();
}

// asignacoin de eventos




botonAgregarTarea.addEventListener("click", alternarFormulario);
botonFormulario.addEventListener("click", agregarTarea);

// inicializar la tabla con las tareas
actualizarTabla();