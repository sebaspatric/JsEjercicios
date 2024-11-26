// Clase base Account para cuentas normales
class Account {
    constructor(email, password) {
      this.email = email;
      this.password = password;
      this.username = this.generateUsername(); // Generar nombre de usuario aleatorio
    }
  
    // Método para generar un nombre de usuario aleatorio
    generateUsername() {
      return 'user' + Math.floor(Math.random() * 10000); // Nombre de usuario aleatorio
    }
  
    // Mostrar los detalles de la cuenta
    displayInfo() {
      return `Email: ${this.email}\nContraseña: ${this.password}`;
    }
  }
  
  // Clase VIPAccount que hereda de Account
  class VIPAccount extends Account {
    constructor(username, email, password) {
      super(email, password); // Llamamos al constructor de la clase base
      this.username = username; // El nombre de usuario es elegido por el VIP
    }
  
    // Mostrar los detalles de la cuenta VIP
    displayInfo() {
      return `Usuario: ${this.username}\nEmail: ${this.email}\nContraseña: ${this.password}`;
    }
  }
  
  // Función para abrir el modal y mostrar la información
  function openModal(message, title) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-info').textContent = message;
    document.getElementById('userInfoModal').style.display = 'flex';
  }
  
  // Función para cerrar el modal
  function closeModal() {
    document.getElementById('userInfoModal').style.display = 'none';
  }
  
  // Eventos para manejar el registro
  document.querySelector('.btn-normal').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const normalUser = new Account(email, password); // Crear cuenta normal con nombre de usuario aleatorio
    openModal(normalUser.displayInfo(), `Bienvenido ${normalUser.username}`);
  });
  
  document.querySelector('.btn-vip').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email-vip').value;
    const password = document.getElementById('password-vip').value;
  
    const vipUser = new VIPAccount(username, email, password); // Crear cuenta VIP con nombre de usuario elegido
    openModal(vipUser.displayInfo(), `Bienvenido ${vipUser.username}`);
  });
  