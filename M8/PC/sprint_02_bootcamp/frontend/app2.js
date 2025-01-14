// URL base para los endpoints
const baseUrl = "http://localhost:5001/api";

// Función de Login
// Función de Registro de Usuario
// Función de Registro de Usuario
// Función de Registro de Usuario
// Función de Registro de Usuario
async function signUp() {
    const firstName = document.getElementById("signup-firstname").value;
    const lastName = document.getElementById("signup-lastname").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    const signUpData = { firstName, lastName, email, password };

    try {
        const response = await fetch(`${baseUrl}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signUpData)
        });

        // Si la respuesta no es correcta, mostrar el error
        if (!response.ok) {
            const errorText = await response.text();
            console.error("Error del servidor:", errorText);
            alert("Error al crear usuario: " + errorText);
            return;
        }

        // Obtener los datos de la respuesta
        const data = await response.json();

        // Verificar que la respuesta contiene un usuario
        if (data.user) {
            alert("Usuario creado exitosamente. Bienvenido, " + data.user.firstName);
            
            // Guardar el token si es necesario para futuras solicitudes
            localStorage.setItem("authToken", data.token);

            showLoginForm(); // Mostrar formulario de login
        } else {
            alert("Error al crear usuario: " + JSON.stringify(data));
        }
    } catch (error) {
        console.error("Error durante el registro:", error);
        alert("Error en el servidor o red.");
    }
}



// Función de inicio de sesión
// Función de Login
async function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const loginData = { email, password };

    try {
        const response = await fetch(`${baseUrl}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        });

        // Si la respuesta no es correcta, mostrar el error
        if (!response.ok) {
            const errorText = await response.text();
            console.error("Error del servidor:", errorText);
            alert("Error al iniciar sesión: " + errorText);
            return;
        }

        // Obtener los datos de la respuesta
        const data = await response.json();

        // Verificar que la respuesta contiene un accessToken
        if (data.accessToken) {
            alert("Inicio de sesión exitoso. Bienvenido, " + data.firstName);
            
            // Guardar el accessToken si es necesario para futuras solicitudes
            localStorage.setItem("authToken", data.accessToken);

            // Redirigir o mostrar contenido protegido
            //showUserDashboard(); // Mostrar la página o panel de usuario
        } else {
            alert("Error al iniciar sesión: " + JSON.stringify(data));
        }
    } catch (error) {
        console.error("Error durante el inicio de sesión:", error);
        alert("Error en el servidor o red.");
    }
}
// Función para obtener la lista de usuarios
async function obtenerUsuarios() {
    try {
      // Recuperar el token de localStorage
      const token = localStorage.getItem("authToken");
  
      // Si no se tiene el token, mostrar un mensaje y salir
      if (!token) {
        console.error('No se encontró el token de autenticación');
        return;
      }
  
      // Realizamos la solicitud usando el token
      const response = await fetch(`${baseUrl}/user`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Pasamos el token en los encabezados
        },
      });
  
      // Verificamos si la respuesta fue exitosa
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
  
      // Parseamos la respuesta como JSON
      const usuarios = await response.json();
      
      // Limpiamos la lista anterior (si hay)
      const listaUsuarios = document.getElementById('listaUsuarios');
      listaUsuarios.innerHTML = '';
  
      // Mostramos la lista de usuarios en la consola
      console.log('Usuarios:', usuarios);
  
      // Añadimos los usuarios a la lista en la interfaz
      usuarios.forEach(usuario => {
        const userItem = document.createElement('li');
        userItem.textContent = `Nombre: ${usuario.firstName} ${usuario.lastName}, Email: ${usuario.email}`;
        
        // creamos un sublistado para los bootcamps
        const bootcampList = document.createElement('ul');
        if (usuario.bootcamps) {
            usuario.bootcamps.forEach(bootcamp => {
              console.log('Bootcamp:', bootcamp); // Verificar cada bootcamp
              const bootcampItem = document.createElement('li');
              bootcampItem.textContent = `Bootcamp: ${bootcamp.title}`;
              bootcampList.appendChild(bootcampItem);
            });
          } else {
            const noBootcampItem = document.createElement('li');
            noBootcampItem.textContent = 'No tiene bootcamps';
            bootcampList.appendChild(noBootcampItem);
          }
        // Añadimos la lista de bootcamps debajo del nombre del usuario
        userItem.appendChild(bootcampList);
        listaUsuarios.appendChild(userItem);
      });
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }
  

// Mostrar formulario de registro
function showSignUpForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
}

// Mostrar formulario de login
function showLoginForm() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

// Validar que los formularios estén correctamente definidos y mostrar los resultados:
document.getElementById("show-signup-btn").addEventListener("click", showSignUpForm); // Al hacer clic en el botón de mostrar registro
document.getElementById("show-login-btn").addEventListener("click", showLoginForm); // Al hacer clic en el botón de mostrar login

// Función para obtener usuarios
// Función para cargar la lista de usuarios desde el servidor
// Función para obtener y mostrar usuarios y sus bootcamps


  
  // Llamar a la función cuando el usuario haga clic


// Función para editar un usuario
async function editUser(userId) {
    const newName = prompt("Nuevo nombre completo del usuario:");
    if (newName) {
        const [firstName, lastName] = newName.split(" ");
        const token = localStorage.getItem("authToken");

        try {
            await fetch(`${baseUrl}/user/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ firstName, lastName }),
            });
            alert("Usuario actualizado");
            fetchUsers(); // Recargar usuarios
        } catch (error) {
            console.error("Error updating user:", error);
        }
    }
}

// Función para eliminar un usuario
async function deleteUser(userId) {
    const token = localStorage.getItem("authToken");
    if (confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
        try {
            await fetch(`${baseUrl}/user/${userId}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            });
            alert("Usuario eliminado");
            fetchUsers(); // Recargar usuarios
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    }
}
