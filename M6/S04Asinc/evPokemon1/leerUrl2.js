//const fs = require('fs/promises');

const axios = require('axios');
const { apiUrls } = require('./data/randomAPI/randomAPI');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const leerYConsultarURL = async () => {
    try {
        // leer archivo JSON con las URLs
        //const urlsJSON = await fs.readFile('urls.json', 'utf8');
        //const urls = JSON.parse(urlsJSON);
        
        // recorrer URLs
        for (const url of apiUrls) {
            // obtener datos de la URL
            //const response = await axios.get(url);
            const { data } = await axios.get(url);

            //console.log(`URL: ${url}\n`, response.data);
            console.log(`Datos obtenidos de ${url}:\n`, data);
           await delay(1500); // Espera 1 segundo antes de la siguiente solicitud


        }
    } catch (error) {
        console.error('Error:', error.message);
    }
};

leerYConsultarURL();
