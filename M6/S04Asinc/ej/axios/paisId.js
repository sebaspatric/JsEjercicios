const axios = require('axios');

const obtenerPais = async () => {
    try {
        const {data} = await axios.get('https://restcountries.com/v2/name/chile');
        console.log(data);
    } catch (error) {
        console.error('Error al obtener los datos:', error.message);
    }
};

obtenerPais();