const content = document.getElementById("content");

// Generadores para cada sección (1-5, 6-11, 12-17)
let currentIndex1_5 = 0;
let currentIndex12_17 = 0;

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

// Función para mostrar los personajes de uno por uno
async function displayCharacters(range, section) {
  const characters = await fetchCharacters(range);
  const generator = createCardGenerator(characters);

  let currentIndex = section === '1-5' ? currentIndex1_5 : currentIndex12_17;
  const maxCharacters = 5;

  // Solo mostrar un personaje en la sección correspondiente
  if (currentIndex < maxCharacters) {
    const card = generator.next().value;
    const sectionContent = document.querySelector(`#section-${section} .cards`);
    sectionContent.innerHTML += card;

    // Actualizar índice
    if (section === '1-5') {
      currentIndex1_5++;
    } else {
      currentIndex12_17++;
    }
  }
}

// Configurar eventos para cada rango
document.getElementById("range-1-5").addEventListener("mouseenter", () => {
  displayCharacters([1, 2, 3, 4, 5], '1-5');
});

document.getElementById("range-6-11").addEventListener("mouseenter", () => {
  displayCharacters([6, 7, 8, 9, 10], '6-11');
});

document.getElementById("range-12-17").addEventListener("mouseenter", () => {
  displayCharacters([11, 12, 13, 14, 15], '12-17');
});
