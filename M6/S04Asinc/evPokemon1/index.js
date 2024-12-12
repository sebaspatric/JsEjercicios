const axios = require('axios');
const { pokemonArray } = require('./data/pokemon/pokemon');
const { apiUrls } = require('./data/randomAPI/randomAPI');

// Función para obtener un Pokémon aleatorio
const obtenerPokemonAleatorio = async () => {
  try {
    const numeroAzar = Math.floor(Math.random() * pokemonArray.length);
    const pokemonSeleccionado = pokemonArray[numeroAzar];

    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonSeleccionado}`);
    const { name, height, weight, abilities } = data;
    const habilidades = abilities.map((a) => a.ability.name).join(', ');

    console.log(`Pokémon seleccionado: ${name}`);
    console.log(`Altura: ${height} dm`);
    console.log(`Peso: ${weight} hg`);
    console.log(`Habilidades: ${habilidades}`);
  } catch (error) {
    console.error('Error al obtener Pokémon:', error);
  }
};
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const consultarRandomAPI = async () => {
    try {
        for (const url of apiUrls) {
            const { data } = await axios.get(url);
            console.log(`Datos obtenidos de ${url}:`, data);
            await delay(1000); // Espera 1 segundo antes de la siguiente solicitud
        }
    } catch (error) {
        console.error('Error al consultar las APIs:', error.message);
    }
};


// Ejecutar funciones
//obtenerPokemonAleatorio();
consultarRandomAPI();
