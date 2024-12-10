// Generador para crear bloques dinámicamente
function* createCardGenerator(characters) {
  for (const character of characters) {
    yield `
      <div class="card">
        <div class="point"></div>
        <div class="desc">
        <div class="title">${character.name}</div>
        <div class="info">Estatura: ${character.height} cm. Peso: ${character.mass} kg.</div>
        </div>        
      </div>`;
  }
}

// Función para obtener personajes desde la API
async function fetchCharacters(range) {
  const baseUrl = "https://swapi.dev/api/people/";
  const promises = range.map(id => fetch(`${baseUrl}${id}`).then(res => res.json()));

  try {
    const characters = await Promise.all(promises);
    console.log("Personajes obtenidos:", characters);
    return characters.map(({ name, height, mass }) => ({
      name,
      height,
      mass: mass === "unknown" ? "Desconocido" : mass,
    }));
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
}

// Función para mostrar los personajes de uno por uno en la sección correspondiente
async function displayCharacters(range, sectionId) {
  const section = document.getElementById(sectionId);
  const cardsContainer = section.querySelector(".cards");

  if (!cardsContainer) {
    console.error(`Contenedor de tarjetas no encontrado en ${sectionId}`);
    return;
  }

  const characters = await fetchCharacters(range);

  if (characters.length === 0) {
    console.error("No se encontraron personajes para mostrar.");
    return;
  }

  const generator = createCardGenerator(characters);

  let index = 0;
  const intervalId = setInterval(() => {
    if (index < characters.length) {
      cardsContainer.innerHTML += generator.next().value;
      index++;
    } else {
      clearInterval(intervalId); // Detener el temporizador
      disableRange(sectionId); // Deshabilitar el rango después de cargar los personajes
    }
  }, 1000); // Cambiar cada 1 segundo
}

// Función para deshabilitar un rango
function disableRange(sectionId) {
  const section = document.getElementById(sectionId);
  const range = section.querySelector(".range");
  if (range) {
    range.style.pointerEvents = "none"; // Deshabilitar eventos en este rango
    range.style.opacity = "0.5"; // Cambiar la apariencia visual para indicar que está deshabilitado
  }
}

// Configurar eventos para los rangos
document.getElementById("range-1-5").addEventListener("mouseenter", () => {
  console.log("Rango 1-5 activado");
  displayCharacters([1, 2, 3, 4, 5], "section-1-5");
}, { once: true }); // Garantiza que solo se ejecute una vez

document.getElementById("range-6-11").addEventListener("mouseenter", () => {
  console.log("Rango 6-11 activado");
  displayCharacters([6, 7, 8, 9, 10], "section-6-11");
}, { once: true }); // Garantiza que solo se ejecute una vez

document.getElementById("range-12-17").addEventListener("mouseenter", () => {
  console.log("Rango 12-17 activado");
  displayCharacters([11, 12, 13, 14, 15], "section-12-17");
}, { once: true }); // Garantiza que solo se ejecute una vez
