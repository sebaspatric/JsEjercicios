document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const contactInfo = `Nombre: ${firstName} ${lastName} Email: ${email} ${phone}`;
    document.getElementById('contact-info').innerText = contactInfo;

    document.getElementById('confirmation-modal').style.display = 'flex';
});

document.querySelector('.close-button').addEventListener('click', function () {
    document.getElementById('confirmation-modal').style.display = 'none';
});
