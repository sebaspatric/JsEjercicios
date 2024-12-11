document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

  //  // Construye la información del contacto
  //  const contactInfo = `Nombre: ${firstName} ${lastName}<br>Email: ${email}<br>Teléfono: ${phone}`;
  //  document.getElementById('contact-info').innerHTML = contactInfo;
//
  //  // Muestra el modal
  //  const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));
  //  modal.show();

    // Crear un nuevo objeto de contacto usando Spread Operator
    const contact = {
        firstName,
        lastName,
        phone,
        email,
    };

     // Crear un nuevo objeto extendido con información adicional
     const newContact = {
        ...contact, // Spread del objeto original
        fullName: `${contact.firstName} ${contact.lastName}`, // Nuevo campo con el nombre completo
    };

    // Usar destructuring para extraer datos del nuevo objeto
    const { fullName, email: contactEmail, phone: contactPhone } = newContact;

    // Construye la información del contacto
    const contactInfo = `Nombre: ${fullName}<br>Email: ${contactEmail}<br>Teléfono: ${contactPhone}`;
    document.getElementById('contact-info').innerHTML = contactInfo;

    // Muestra el modal
    const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    modal.show();


});
