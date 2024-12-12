const fs = require('fs/promises');

const axios = require('axios');
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const leerYConsultarURL = async () => {
    try {
        // leer archivo JSON con las URLs
        const urlsJSON = await fs.readFile('urls.json', 'utf8');
        const urls = JSON.parse(urlsJSON);
        
        // recorrer URLs
        for (const url of urls) {
            // obtener datos de la URL
            const response = await axios.get(url);
            console.log(`URL: ${url}\n`, response.data);
            await delay(1000); // Espera 1 segundo antes de la siguiente solicitud

        }
    } catch (error) {
        console.error('Error:', error.message);
    }
};

leerYConsultarURL();
