const fs = require('fs/promises');
const axios = require('axios');
const obtenerPokemonAleatorio = async () => {
    try {
       //leer el archivo de texto con nombres de pokemon
        const data = await fs.readFile('pokemon.txt', 'utf-8');
        const pokemons = JSON.parse(data);

        //seleccionar un pokemon al azar
        const randomIndex = Math.floor(Math.random() * pokemons.length);
        const pokemonSelecionado = pokemons[randomIndex];

        //obtener la información del pokemon seleccionado de la API
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonSelecionado}`);
        console.log(`El pokemon seleccionado es: ${pokemonSelecionado}`);
        console.log(`Nombre: ${response.data.name}`);
        console.log(`Detalles: ${response.data}`);
        console.log('Altura:', response.data.height);
        console.log('Peso:', response.data.weight);
        console.log(response.data);
        // Mostrar detalles correctamente
        //console.log('Detalles del Pokémon:', JSON.stringify(response.data, null, 2));
        
    } catch (error) {
        console.error('Error:', error.message);
    }
};

obtenerPokemonAleatorio();