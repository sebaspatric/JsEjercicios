// Constructor de usuario
class Usuario {
  constructor(nombre, correo, trabajo, telefono, sobreTi) {
      this.nombre = nombre;
      this.correo = correo;
      this.trabajo = trabajo;
      this.telefono = telefono;
      this.sobreTi = sobreTi;
  }
}

// Función para capturar datos y crear el perfil
function registerUser() {
  // Capturando valores del formulario
  const nombre = document.getElementById("name").value;
  const correo = document.getElementById("email").value;
  const trabajo = document.getElementById("job").value;
  const telefono = document.getElementById("phone").value;
  const sobreTi = document.getElementById("about").value;

  // Creando un nuevo objeto Usuario
  const usuario = new Usuario(nombre, correo, trabajo, telefono, sobreTi);

  // Mostrando la información en el perfil
  document.getElementById("displayName").innerText = usuario.nombre;
  document.getElementById("displayEmail").innerText = usuario.correo;
  document.getElementById("displayJob").innerText = usuario.trabajo;
  document.getElementById("displayPhone").innerText = usuario.telefono;
  document.getElementById("displayAbout").innerText = usuario.sobreTi;

  // Mostrando la tarjeta de perfil
  document.getElementById("profileCard").style.display = "block";
}
