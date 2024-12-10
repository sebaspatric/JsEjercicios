const content = document.getElementById("content");

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
async function displayCharacters(range) {
  content.innerHTML = ""; // Limpiar contenido
  const characters = await fetchCharacters(range);

  const generator = createCardGenerator(characters);
  
  let index = 0;
  const intervalId = setInterval(() => {
    if (index < characters.length) {
      content.innerHTML += generator.next().value;
      index++;
    } else {
      clearInterval(intervalId); // Detener el temporizador una vez que se hayan mostrado todos los personajes
    }
  }, 1000); // Cambiar cada 1 segundo
}

// Configurar eventos
document.getElementById("range-1-5").addEventListener("mouseenter", () => displayCharacters([1, 2, 3, 4, 5]));
document.getElementById("range-6-11").addEventListener("mouseenter", () => displayCharacters([6, 7, 8, 9, 10]));
document.getElementById("range-12-17").addEventListener("mouseenter", () => displayCharacters([11, 12, 13, 14, 15]));
