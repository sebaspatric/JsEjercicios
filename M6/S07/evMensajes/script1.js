// Variable para controlar si el mensaje ya ha sido enviado
let mensajeEnviado = false;

// Función para simular el envío de un mensaje
function enviarMensaje() {
    return new Promise((resolve, reject) => {
        if (mensajeEnviado) {
            // Si ya se ha enviado un mensaje, rechazamos la promesa con un mensaje de advertencia
            reject('Ya has enviado un mensaje, no puedes enviar otro');
        } else {
            // Si no se ha enviado un mensaje, lo enviamos y resolvemos la promesa
            mensajeEnviado = true;
            resolve('Mensaje enviado');
        }
    });
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje, tipo) {
    const notificacion = document.createElement('div');
    notificacion.textContent = mensaje;
    
    // Establecer los estilos de la notificación
    if (tipo === 'exito') {
        notificacion.style.backgroundColor = 'lightgreen';
        notificacion.style.color = 'green';
    } else if (tipo === 'advertencia') {
        notificacion.style.backgroundColor = 'lightcoral';
        notificacion.style.color = 'red';
    }
    
    notificacion.style.padding = '10px';
    notificacion.style.textAlign = 'center';
    notificacion.style.borderRadius = '5px';
    notificacion.style.marginTop = '20px';
    
    document.body.appendChild(notificacion);

    // Eliminar la notificación después de unos segundos
    setTimeout(() => {
        notificacion.remove();
    }, 3000);
}

// Llamar a la función enviarMensaje y manejar la resolución/rechazo de la promesa
document.getElementById('send-btn').addEventListener('click', () => {
    enviarMensaje()
        .then((mensaje) => {
            mostrarNotificacion(mensaje, 'exito');
        })
        .catch((error) => {
            mostrarNotificacion(error, 'advertencia');
        });
});
