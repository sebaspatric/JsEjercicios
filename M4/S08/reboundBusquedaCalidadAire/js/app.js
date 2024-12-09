

// Función para formatear el texto ingresado utilizando el plugin
function formatearTexto(texto) {
    return TextFormatter.toTitleCase(texto);
}

// Función para limpiar los resultados y el campo de búsqueda
function limpiarBusqueda() {
    document.getElementById("comuna").value = "";
    document.getElementById("result").innerHTML = "";
}

// Función para buscar la calidad del aire en la API
async function buscarCalidadAire() {
    const input = document.getElementById('comuna').value;

    // Validar entrada del usuario
    if (!input.trim()) {
        alert('Por favor, ingrese el nombre de una comuna.');
        return;
    }

    // Formatear el texto ingresado
    const comuna = formatearTexto(input);
    console.log('Comuna formateada:', comuna); // Verifica el texto formateado

    const url = 'https://sinca.mma.gob.cl/index.php/json/listadomapa2k19/';

    try {
        // Solicitar datos de la API
        const respuesta = await fetch(url);
        if (!respuesta.ok) throw new Error('No se pudo conectar con la API.');

        const datos = await respuesta.json();

        // Filtrar datos por comuna (busca coincidencias parciales)
        const comunasCoincidentes = datos.filter(d => d.nombre.toLowerCase().includes(comuna.toLowerCase()));
        mostrarResultados(comunasCoincidentes, comuna);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').innerHTML = `
            <div class="alert alert-danger">Error al conectar con la API.</div>
        `;
    }
}

// Mostrar resultados en pantalla
function mostrarResultados(datos, comunaBuscada) {
    const resultadosDiv = document.getElementById('result');
    if (datos.length > 0) {
        // Limpiar resultados previos
        resultadosDiv.innerHTML = '';

        // Mostrar resultados de todas las comunas coincidentes
        datos.forEach(data => {
            const { nombre, region, realtime } = data;
            const contaminante = realtime?.[0]?.name || 'Sin datos';
            const calidad = realtime?.[0]?.info?.rows?.[0]?.c?.[3]?.v || 'Sin datos';

            resultadosDiv.innerHTML += `
                <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                    <div class="card-header">Resultados</div>
                    <div class="card-body">
                        <h5 class="card-title">${nombre}</h5>
                        <p class="card-text"><strong>Región:</strong> ${region}</p>
                        <p class="card-text"><strong>Contaminante:</strong> ${contaminante}</p>
                        <p class="card-text"><strong>Calidad del aire:</strong> ${calidad}</p>
                    </div>
                </div>
            `;
        });
    } else {
        resultadosDiv.innerHTML = `
            <div class="alert alert-warning">No se encontraron datos para la comuna: ${comunaBuscada}.</div>
        `;
    }
}
