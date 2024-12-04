let mensajeEnviado = false;

function enviarMensaje() {
    return new Promise((resolve, reject) => {
        if (mensajeEnviado) {
            reject('Ya has enviado un mensaje, no puedes enviar otro');
        } else {
            mensajeEnviado = true;
            resolve('Mensaje enviado');
        }
    });
}

function mostrarNotificacion(mensaje, tipo) {
    const notificacion = document.createElement('div');
    notificacion.textContent = mensaje;
    notificacion.classList.add('notificacion');
    notificacion.classList.add(tipo);

    // Agregar la notificación al body
    document.getElementById('message-card').appendChild(notificacion);

    // Eliminar la notificación después de 3 segundos
    setTimeout(() => {
        notificacion.style.opacity = '0'; // Efecto de desvanecimiento
        setTimeout(() => notificacion.remove(), 500); // Eliminar después de la animación
    }, 3000);
}

document.getElementById('send-btn').addEventListener('click', () => {
    enviarMensaje()
        .then((mensaje) => {
            mostrarNotificacion(mensaje, 'exito');
        })
        .catch((error) => {
            mostrarNotificacion(error, 'advertencia');
        });
});
