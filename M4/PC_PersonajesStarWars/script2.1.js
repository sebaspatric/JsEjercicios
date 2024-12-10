// Generador para crear bloques dinámicamente
function* createCardGenerator(characters) {
  for (const character of characters) {
    yield `
      <div class="card">
        <div class="title">${character.name}</div>
        <div class="info">Estatura: ${character.height} cm. Peso: ${character.mass} kg.</div>
      </div>`;
  }
}

// Función para obtener personajes desde la API
async function fetchCharacters(range) {
  const baseUrl = "https://swapi.dev/api/people/";
  const promises = range.map(id => fetch(`${baseUrl}${id}`).then(res => res.json()));

  try {
    const characters = await Promise.all(promises);
    // Log para verificar si los personajes se obtienen correctamente
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

  // Verificar si el contenedor existe
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
      clearInterval(intervalId); // Detener el temporizador una vez que se hayan mostrado todos los personajes
    }
  }, 1000); // Cambiar cada 1 segundo
}

// Configurar eventos para los rangos
document.getElementById("range-1-5").addEventListener("mouseenter", () => {
  console.log("Rango 1-5 activado");
  displayCharacters([1, 2, 3, 4, 5], "section-1-5");
});
document.getElementById("range-6-11").addEventListener("mouseenter", () => {
  console.log("Rango 6-11 activado");
  displayCharacters([6, 7, 8, 9, 10], "section-6-11");
});
document.getElementById("range-12-17").addEventListener("mouseenter", () => {
  console.log("Rango 12-17 activado");
  displayCharacters([11, 12, 13, 14, 15], "section-12-17");
});
