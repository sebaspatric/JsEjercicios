// Función que borra el contenido cuando se hace clic
function clearContent(element) {
    if (element.textContent === element.getAttribute('data-initial')) {
      element.textContent = ''; // Limpia el contenido
    }
  }
  
  // Función para restaurar el contenido original si el campo está vacío
  function restoreContent(element) {
    if (element.textContent.trim() === '') {
      element.textContent = element.getAttribute('data-initial'); // Restaura el contenido inicial
    }
  }
  
  // Configurar el contenido inicial para los campos editables
  document.querySelectorAll('.editable-field').forEach(function (field) {
    field.setAttribute('data-initial', field.textContent);
  });
  
  // Función para enviar correo y mostrar la información en la consola
  function enviarCorreo() {
    const para = document.getElementById('para').textContent.trim();
    const titulo = document.getElementById('titulo').textContent.trim();
    const mensaje = document.getElementById('mensaje').textContent.trim();
    const de = document.getElementById('de').textContent.trim();
  
      // Verificar si los campos están con sus valores iniciales o han sido editados
  
  /*if (para === '' || para === 'email destinatario') {
    alert('El campo PARA está vacío o no ha sido editado correctamente');
    return;
  }
  if (titulo === '' || titulo === 'TÍTULO') {
    alert('El campo TÍTULO está vacío o no ha sido editado correctamente');
    return;
  }
  if (mensaje === '' || mensaje === 'Mensaje') {
    alert('El campo MENSAJE está vacío o no ha sido editado correctamente');
    return;
  }
  if (de === '' || de === 'email remitente') {
    alert('El campo DE está vacío o no ha sido editado correctamente');
    return;
  }*/

    // Obtener los correos CC de los campos correspondientes
    const ccFields = document.querySelectorAll('#cc1, #cc2, #cc3, #cc4, #cc5, #cc6');
    const cc = [];
  
    // Filtrar y almacenar los correos de CC
    ccFields.forEach(field => {

     const email = field.textContent.trim();
    // Verificar que no sea el valor predeterminado 'email' o vacío
    if (email !== 'email' && email !== '') {
      cc.push(email);
      }
    });
  
    // Mostrar la información en la consola
    console.log(`PARA: ${para}`);
    console.log(`TÍTULO: ${titulo}`);
    console.log(`MENSAJE: ${mensaje}`);
    console.log(`FROM: ${de}`);
  
    // Usamos el parámetro Rest para recibir una lista de correos electrónicos CC y recorrerlos con for...of
    displayCCEmails(...cc);
  }
  
  // Función para mostrar los correos CC utilizando un parámetro Rest y un bucle for...of
  function displayCCEmails(...emails) {
    for (const email of emails) {
      console.log(`CC: ${email}`);
    }
  }
  