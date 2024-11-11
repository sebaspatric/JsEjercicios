// Datos de las actividades
const actividades = {
    natacion: {
        titulo: "Natación",
        ubicacion: "Lago Cochrane",
        descripcion: "Deporte o ejercicio que consiste en nadar en las pruebas de natación...",
        imagen: "img/noruega.jpg"
    },
    trekking: {
        titulo: "Trekking",
        ubicacion: "Parque Nacional Torres del Paine",
        descripcion: "Actividad de caminata por senderos montañosos en contacto con la naturaleza...",
        imagen: "https://maps.arcticyeti.com/cgmlImg/1424-asafyyx/wxfhdpi16/image.jpg"
    },
    ferry: {
        titulo: "Tour en Ferry",
        ubicacion: "Canal de Chacao",
        descripcion: "Recorrido turístico en ferry para observar paisajes y fauna marina...",
        imagen: "img/patrikGensel.jpg"
    }
};

// Función para cambiar el contenido de la tarjeta
function cambiarActividad() {
    const actividadSeleccionada = document.getElementById("actividades").value;
    const actividad = actividades[actividadSeleccionada];

    // Cambiar imagen de fondo
    document.getElementById("imagenActividad").style.backgroundImage = `url(${actividad.imagen})`;

    // Cambiar contenido de la tarjeta
    document.getElementById("tituloActividad").innerText = actividad.titulo;
    //document.getElementById("ubicacionActividad").innerHTML = `<i class="fas fa-map-marker-alt"></i> ${actividad.ubicacion}`;    document.getElementById("descripcionActividad").innerText = actividad.descripcion;

    // Actualizar contenido del overlay
    document.getElementById("tituloOverlay").innerText = actividad.titulo;
  
    document.getElementById("ubicacionOverlay").innerHTML = `<i class="fas fa-map-marker-alt"></i> ${actividad.ubicacion}`;
}

// Función para mostrar el overlay al pasar el cursor
function mostrarOverlay() {
    document.getElementById("overlay").style.display = "flex";
}

// Función para ocultar el overlay al quitar el cursor
function ocultarOverlay() {
    document.getElementById("overlay").style.display = "none";
}

// Inicialización al cargar la página
window.onload = function() {
    document.getElementById("actividades").value = "natacion"; // Seleccionar "Natación" por defecto
    cambiarActividad(); // Mostrar "Natación" al cargar la página

}

