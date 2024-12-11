// Función para convertir texto a Title Case
function toTitleCase(text) {
    return text
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Limpiar resultados cuando el usuario comienza a escribir nuevamente
function limpiarResultados() {
    document.getElementById('resultado').innerHTML = '';
}

// Evento de clic en el botón "Buscar"
document.getElementById('buscar').addEventListener('click', async () => {
    let artista = document.getElementById('artista').value.trim();
    let cancion = document.getElementById('cancion').value.trim();
    const resultadoDiv = document.getElementById('resultado');

    // Validar campos
    if (!artista || !cancion) {
        resultadoDiv.innerHTML = '<div class="alert alert-warning">Por favor, ingresa el nombre del artista y la canción.</div>';
        return;
    }

    // Convertir a Title Case
    artista = toTitleCase(artista);
    cancion = toTitleCase(cancion);

    try {
        // Llamada a la API
        const respuesta = await fetch(`https://api.lyrics.ovh/v1/${artista}/${cancion}`);
        if (!respuesta.ok) throw new Error('No se encontró la canción.');

        const datos = await respuesta.json();

        // Dividir las letras por líneas y filtrar las que contengan "Paroles de la chanson"
        const letras = datos.lyrics
            .split('\n') // Dividir por líneas
            .filter(linea => !linea.toLowerCase().includes('paroles de la chanson')) // Filtrar líneas no deseadas
            .map(linea => linea.trim()) // Eliminar espacios adicionales
            .filter(linea => linea); // Filtrar líneas vacías

        // Mostrar las líneas restantes
        if (letras.length > 0) {
            resultadoDiv.innerHTML = letras
                .map(linea => `<div class="linea">"${linea}"</div>`)
                .join('');
        } else {
            resultadoDiv.innerHTML = '<div class="alert alert-warning">No se encontraron letras válidas para esta canción.</div>';
        }
    } catch (error) {
        resultadoDiv.innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
    }
});

// Agregar eventos para limpiar resultados al escribir
document.getElementById('artista').addEventListener('input', limpiarResultados);
document.getElementById('cancion').addEventListener('input', limpiarResultados);
