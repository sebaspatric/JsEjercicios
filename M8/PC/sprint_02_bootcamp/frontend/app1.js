// URL base para los endpoints
const baseUrl = "http://localhost:5001/api";

// Función para obtener usuarios
async function fetchUsers() {
    try {
        const response = await fetch(`${baseUrl}/user`);
        const users = await response.json();
        console.log("Respuesta de la API:", users); // Ver qué datos se reciben
        renderUsers(users);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

// Función para obtener bootcamps
async function fetchBootcamps() {
    try {
        const response = await fetch(`${baseUrl}/bootcamp`);
        const bootcamps = await response.json();
        renderBootcamps(bootcamps);
    } catch (error) {
        console.error("Error fetching bootcamps:", error);
    }
}

// Función para renderizar usuarios en el HTML
function renderUsers(users) {
    const userList = document.getElementById("user-list");
    userList.innerHTML = ""; // Limpiar antes de renderizar

    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.className = "card";
        userCard.innerHTML = `
            <h3>${user.firstName} ${user.lastName}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Bootcamps:</strong></p>
            <ul>
                ${user.bootcamps.map(bootcamp => `<li>${bootcamp.title}</li>`).join("")}
            </ul>
            <button onclick="editUser(${user.id})">Editar</button>
            <button onclick="deleteUser(${user.id})">Eliminar</button>
        `;
        userList.appendChild(userCard);
    });
}

// Función para renderizar bootcamps en el HTML
function renderBootcamps(bootcamps) {
    const bootcampList = document.getElementById("bootcamp-list");
    bootcampList.innerHTML = ""; // Limpiar antes de renderizar

    bootcamps.forEach(bootcamp => {
        const bootcampCard = document.createElement("div");
        bootcampCard.className = "card";
        bootcampCard.innerHTML = `
            <h3>${bootcamp.title}</h3>
            <p>${bootcamp.description}</p>
            <p><strong>Usuarios inscritos:</strong></p>
            <ul>
                ${bootcamp.users.map(user => `<li>${user.firstName} ${user.lastName}</li>`).join("")}
            </ul>
            <button onclick="editBootcamp(${bootcamp.id})">Editar</button>
            <button onclick="deleteBootcamp(${bootcamp.id})">Eliminar</button>
            <button onclick="addUserToBootcamp(${bootcamp.id})">Agregar Usuario</button>
        `;
        bootcampList.appendChild(bootcampCard);
    });
}

// Función para editar un usuario
async function editUser(userId) {
    const newName = prompt("Nuevo nombre completo del usuario:");
    if (newName) {
        const [firstName, lastName] = newName.split(" ");
        try {
            await fetch(`${baseUrl}/user/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
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
    if (confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
        try {
            await fetch(`${baseUrl}/user/${userId}`, {
                method: "DELETE",
            });
            alert("Usuario eliminado");
            fetchUsers(); // Recargar usuarios
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    }
}

// Función para editar un bootcamp
async function editBootcamp(bootcampId) {
    const newTitle = prompt("Nuevo título del Bootcamp:");
    const newDescription = prompt("Nueva descripción del Bootcamp:");
    if (newTitle && newDescription) {
        try {
            await fetch(`${baseUrl}/bootcamp/${bootcampId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title: newTitle, description: newDescription }),
            });
            alert("Bootcamp actualizado");
            fetchBootcamps(); // Recargar bootcamps
        } catch (error) {
            console.error("Error updating bootcamp:", error);
        }
    }
}

// Función para eliminar un bootcamp
async function deleteBootcamp(bootcampId) {
    if (confirm("¿Estás seguro de que deseas eliminar este bootcamp?")) {
        try {
            await fetch(`${baseUrl}/bootcamp/${bootcampId}`, {
                method: "DELETE",
            });
            alert("Bootcamp eliminado");
            fetchBootcamps(); // Recargar bootcamps
        } catch (error) {
            console.error("Error deleting bootcamp:", error);
        }
    }
}

// Función para agregar usuarios a un bootcamp
async function addUserToBootcamp(bootcampId) {
    const userEmails = prompt("Ingresa los correos electrónicos de los usuarios (separados por coma):");
    if (userEmails) {
        try {
            await fetch(`${baseUrl}/bootcamp/adduser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    bootcampId,
                    userEmails: userEmails.split(",").map(email => email.trim())
                }),
            });
            alert("Usuarios agregados al Bootcamp");
            fetchBootcamps(); // Recargar bootcamps
        } catch (error) {
            console.error("Error adding users to bootcamp:", error);
        }
    }
}

// Inicializar la página con los datos
fetchUsers();
fetchBootcamps();
