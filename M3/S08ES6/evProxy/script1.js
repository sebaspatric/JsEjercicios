// creaar objeto reserva
// caargr la pagina antes

window.onload = function() {
// Objeto base
const reserva = {
  nombre: '',
  apellido: '',
  correo: '',
  edad: null,
  fecha: '',
};

// Lista para almacenar reservas válidas
const reservas = [];


// Manejador del Proxy
const handler = {
  set(target, prop, value) {
      if (prop === 'edad') {
          if (value < 18) {
              alert('Debes ser mayor de edad para crear una reservación');
              target.edad = null; // Resetear edad para evitar valores incorrectos
              return false; // Bloquea el almacenamiento de la edad
          }
      }

      // Permitir asignación de cualquier propiedad si la edad es válida
      if (target.edad !== null && target.edad >= 18) {
          target[prop] = value;
          return true;
      }

      // Si la edad aún no se ha validado, solo permitir la asignación de `edad`
      if (prop === 'edad') {
          target[prop] = value;
          return true;
      }

      console.warn('No se almacenaron datos porque la edad no cumple el requisito.');
      return false;
  },
};

// Crear Proxy
const proxyReserva = new Proxy(reserva, handler);

// Manejar el formulario
const form = document.getElementById('reservaForm');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenir el envío del formulario

  // Obtener los valores de los inputs
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const correo = document.getElementById('correo').value;
  const edad = parseInt(document.getElementById('edad').value, 10);
  const fecha = document.getElementById('fecha').value;

  // Intentar asignar valores al Proxy
  proxyReserva.edad = edad; // Validación principal a través del Proxy

  if (proxyReserva.edad !== null && proxyReserva.edad >= 18) {
      proxyReserva.nombre = nombre;
      proxyReserva.apellido = apellido;
      proxyReserva.correo = correo;
      proxyReserva.fecha = fecha;

      // Crear una copia del objeto reserva y agregarla a la lista
      reservas.push({ ...reserva });

      // Mostrar el objeto completo en la consola si todo es válido
      console.log('Objeto reserva almacenado:', reserva);
      // Mostrar los datos del objeto
      alert(`Datos del objeto reserva:\n${JSON.stringify(proxyReserva, null, 2)}`);
      
      alert(`Datos del objeto reserva:
      - Nombre: ${nombre}
      - Apellido: ${apellido}
      - Correo: ${correo}
      - Edad: ${edad}
      - Fecha: ${fecha}`);


      function mostrarReservas() {
        let mensaje = "Reservas registradas:\n\n";
        reservas.forEach((reserva, index) => {
            mensaje += `Reserva #${index + 1}\n`;
            mensaje += `Nombre: ${reserva.nombre}\n`;
            mensaje += `Apellido: ${reserva.apellido}\n`;
            mensaje += `Edad: ${reserva.edad}\n`;
            mensaje += `Correo: ${reserva.correo}\n`;
            mensaje += `Fecha: ${reserva.fecha}\n`;
            mensaje += "-----------------------\n";
        });
    
        alert(mensaje);
    }
    

      // Mostrar la lista de reservas en la consola
      console.log('Lista de reservas almacenadas:', reservas);
      mostrarReservas(); 
      // Limpiar los inputs
      form.reset();
      
  } else {
      console.warn('No se almacenaron los datos debido a restricciones.');
  }
});




  /**
   * 
   * 
    const form = document.getElementById('reservaForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // obtener los vaaalores de los inputs
    const nombre = form.nombre.value;
    const apellido = form.apellido.value;
    const edad = parseInt(form.edad.value);

    // agregar la reserva al array
    reserva.push({ nombre, apellido, edad });

    // limpiar los inputs
    form.reset();

    // mostrar la reserva en la lista
    const listaReservas = document.getElementById('reservasList');
    const li = document.createElement('li');
    li.textContent = `${nombre} ${apellido} - ${edad} años`;
    listaReservas.appendChild(li);
  });   
   */




};



