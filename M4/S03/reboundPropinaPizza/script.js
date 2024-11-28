// Precio de cada ingrediente extra
const PRECIO_EXTRA = 800;

// Elementos de la interfaz
const ingredientesSeleccionadosDiv = document.getElementById('ingredientes-seleccionados');
const ingredientesExtrasDiv = document.getElementById('ingredientes-extras');
const costoExtrasSpan = document.getElementById('costo-extras');
const propinaInput = document.getElementById('propina');
const propinaValorSpan = document.getElementById('propina-valor');
const checkboxes = document.querySelectorAll('.form-check-input');

// Valor por defecto de la propina
const PROPINA_DEFAULT = 1000;

// Función para actualizar la lista de ingredientes seleccionados
const actualizarIngredientes = () => {
  const ingredientesSeleccionados = [];
  const ingredientesExtras = [];

  // Contador de ingredientes gratis
  let contadorGratis = 0;
  let costoExtras = 0;

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      ingredientesSeleccionados.push(checkbox.value);
      
      // Si hay más de 3 ingredientes seleccionados, se cobran los extras
      if (contadorGratis < 3) {
        contadorGratis++;
      } else {
        ingredientesExtras.push(checkbox.value);
        costoExtras += PRECIO_EXTRA; // Cada ingrediente extra cuesta 800
      }
    }
  });

  // Mostrar ingredientes seleccionados
  ingredientesSeleccionadosDiv.innerHTML = ingredientesSeleccionados.length ? ingredientesSeleccionados.join(', ') : 'Ninguno';
  ingredientesExtrasDiv.innerHTML = ingredientesExtras.length ? ingredientesExtras.join(', ') : 'Ninguno';

  // Mostrar costo de ingredientes extras
  costoExtrasSpan.innerText = costoExtras;
};

// Función para actualizar el valor de la propina
const actualizarPropina = () => {
  const propina = parseFloat(propinaInput.value);
  const propinaFinal = isNaN(propina) || propina < 0 ? 0 : propina;  // Validar valor de propina
  propinaValorSpan.innerText = propinaFinal;
};

// Asignar eventos a los checkboxes para actualizar los ingredientes seleccionados
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', actualizarIngredientes);
});

// Asignar evento de entrada al campo de propina
propinaInput.addEventListener('input', actualizarPropina);

// Asignar valor predeterminado de la propina si el campo está vacío al hacer clic
const asignarPropinaDefault = () => {
  if (propinaInput.value === '') {
    propinaInput.value = PROPINA_DEFAULT;  // Asignar valor predeterminado de la propina
    actualizarPropina();  // Actualizar el valor de la propina
  }
};

// Mostrar un alert si no se asignó propina y asignar la propina por defecto al hacer clic
const verificarYAsignarPropinaDefault = () => {
  if (propinaInput.value === '' || isNaN(propinaInput.value) || parseFloat(propinaInput.value) <= 0) {
    alert(`No has asignado propina.`);
    
  } else {alert(`Tu propina de ${propinaInput.value} ha sido Enviada.`);
}
  };

// Inicializar los ingredientes al cargar la página
document.addEventListener('DOMContentLoaded', actualizarIngredientes);

// Asignar evento de focus al campo de propina para establecer el valor predeterminado si está vacío
propinaInput.addEventListener('focus', asignarPropinaDefault);

// Asignar un evento al formulario para verificar si se asignó propina antes de enviar el pedido
const enviarPedido = () => {
  verificarYAsignarPropinaDefault();  // Verificar y asignar propina por defecto si es necesario
  // Aquí puedes continuar con el envío del pedido o cualquier otra acción.
};
