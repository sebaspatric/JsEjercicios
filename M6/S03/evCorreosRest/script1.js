// Selección del formulario y el botón de envío
const form = document.getElementById('emailForm');
const sendButton = document.getElementById('sendButton');

// Evento para manejar el envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener los valores de los campos
    const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const from = document.getElementById('from').value;
    const cc = document.getElementById('cc').value.split(','); // Acepta varios CC separados por comas

    // Mostrar la información en consola
    console.log(`PARA: ${to}`);
    console.log(`TITULO: ${subject}`);
    console.log(`MENSAJE: ${message}`);
    console.log(`DE: ${from}`);
    console.log('_____________________________________');
    
    // Mostrar los correos CC usando un bucle for of
    for (let email of cc) {
        email = email.trim(); // Eliminar espacios al inicio y al final de los correos
        console.log(`CC: ${email}`);
        console.log('_____________________________________');
    }
});
