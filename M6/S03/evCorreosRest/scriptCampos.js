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

  // Configurar el contenido inicial para los campos editable
  document.querySelectorAll('.editable-field').forEach(function (field) {
    field.setAttribute('data-initial', field.textContent);
  });