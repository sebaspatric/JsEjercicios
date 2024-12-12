const axios = require('axios');

//axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
//  .then(response => {
//    console.log(response.data);
//  })
//  .catch(error => {
//    console.error(error);
//  });

const obtenerPokemon = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

obtenerPokemon();