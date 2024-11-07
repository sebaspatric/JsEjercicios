
function mostrarMensaje() {
  document.getElementById("text2").style.display = "block";
}
function ocultarMensaje() {
  document.getElementById("text2").style.display = "none";
}
// Agrandar y reducir la imagen al hacer clic en el segundo div

// Función para agrandar la imagen
function agrandarImagen() {
    const imagen = document.getElementById("img");
    imagen.style.width = "40%";
  }
  
  // Función para restaurar el tamaño de la imagen
  function restaurarImagen() {
    const imagen = document.getElementById("img");
    imagen.style.width = "20%";
  }
  
  // Función para agrandar el texto al hacer doble clic
  function agrandarTexto() {
    const caja3 = document.getElementById("caja3");
    caja3.style.fontSize = caja3.style.fontSize === "2em" ? "1em" : "2em";
  }
  
  // Asignación de eventos
  document.addEventListener("DOMContentLoaded", () => {
    // Eventos de text1 para mostrar y ocultar text2
    const text1 = document.getElementById("text1");
    text1.addEventListener("mouseover", mostrarMensaje);
    text1.addEventListener("mouseout", ocultarMensaje);
  
    // Eventos de imagen para agrandar y restaurar
    const caja2 = document.getElementById("caja2");
    caja2.addEventListener("click", agrandarImagen);
    caja2.addEventListener("mouseout", restaurarImagen);
  
    // Evento de doble clic en caja3 para agrandar texto
    const caja3 = document.getElementById("caja3");
    caja3.addEventListener("dblclick", agrandarTexto);
  });