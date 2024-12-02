// Obtener los elementos del DOM
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Crear un Map para almacenar las tareas
const taskMap = new Map();

// Contador para generar ID únicos de tarea
let taskIdCounter = 1;

// Evento al agregar tareas
taskForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar que se recargue la página

  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const taskId = taskIdCounter++;
  const taskObject = { id: taskId, text: taskText, completed: false };

  // Almacenamos la tarea en el Map con el ID como clave
  taskMap.set(taskId, taskObject);
  
  // Renderizamos la lista de tareas
  renderTasks();
  taskInput.value = ""; // Limpiar el campo de entrada
});

// Renderizar las tareas pendientes y completadas
function renderTasks() {
  taskList.innerHTML = ""; // Limpiar la lista

  // Recorrer las tareas en el Map
  taskMap.forEach((task, taskId) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

    const taskLabel = document.createElement("span");
    taskLabel.textContent = task.text;
    if (task.completed) {
      taskLabel.classList.add("text-decoration-line-through", "text-muted"); // Tachado y gris
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    // Evento al marcar/desmarcar una tarea
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      taskLabel.classList.toggle("text-decoration-line-through", task.completed); // Tachado o desmarcado
      taskLabel.classList.toggle("text-muted", task.completed); // Gris cuando está marcado

      // Si la tarea está marcada, la imprimimos en consola como Map
      if (task.completed) {
        // Imprimir directamente el Map en la consola
        printMap();
      }
    });

    // Agregar los elementos al list item
    listItem.appendChild(taskLabel);
    listItem.appendChild(checkbox);
    taskList.appendChild(listItem);
  });
}

// Imprimir el Map directamente en consola
function printMap() {
  console.log(taskMap);
}
