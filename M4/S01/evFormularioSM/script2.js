document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    
    // Prevención del envío del formulario (para mostrar la alerta en lugar de enviar)
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
        
        // Capturar los valores de los campos del formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const motivo = document.getElementById('motivo').value;
        const mensaje = document.getElementById('mensaje').value;
        
        // Crear el contenido de la alerta con el formato solicitado
        const alertaContenido = `
            DE: ${nombre} ${apellido} (${email})\n
            - ASUNTO: ${motivo}\n
            - MENSAJE:\n
            ${mensaje}
        `;
        
        // Mostrar la alerta con el contenido
        alert(alertaContenido);
        
        // Reiniciar formulario (opcional)
        contactForm.reset();
    });
});
