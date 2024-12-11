const ingredientesGratis = 3;
const costoExtra = 800;

function actualizarIngredientes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const seleccionados = [];
    const extras = [];
    let costoTotalExtras = 0;

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            seleccionados.push(checkbox.value);
            if (seleccionados.length > ingredientesGratis) {
                extras.push(checkbox.value);
                costoTotalExtras += costoExtra;
            }
        }
    });

    document.getElementById('ingredientes-seleccionados').textContent = seleccionados.join(', ');
    document.getElementById('ingredientes-extras').textContent = extras.join(', ');
    document.getElementById('costo-extras').textContent = costoTotalExtras;
}
function asignarPropinaDefault() {
    const propinaInput = document.getElementById('propina');
    if (!propinaInput.value) {
        propinaInput.value = 1000; // Asignar valor por defecto
    }
}
function agregarPropina() {
    const propinaInput = document.getElementById('propina');
    if (!propinaInput.value) {
        propinaInput.value = 1000; // Valor por defecto
    }
}

function enviarPedido() {
    const propina = document.getElementById('propina').value;
    if (propina) {
        alert(`Su propina de $${propina} ha sido enviada`);
    } else {
        alert('Aún no ha definido una propina');
    }
}

// Añade eventos a los checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', actualizarIngredientes);
});
// Evento para el campo de propina
const propinaInput = document.getElementById('propina');
propinaInput.addEventListener('click', asignarPropinaDefault);