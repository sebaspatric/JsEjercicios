const axios = require('axios');
const axiosRetry = require('axios-retry');
//import axiosRetry from 'axios-retry'; // Usando import (ESM)

const { apiUrls } = require('./data/randomAPI/randomAPI');

// Configuración de axios-retry
axiosRetry(axios, {
    retries: 4,  // Número de intentos
    retryDelay: axiosRetry.exponentialDelay,  // Retraso exponencial
    retryCondition: (error) => {
        // Solo reintentar si el error es por límite de solicitudes (429)
        return error.response && error.response.status === 429;
    }
});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const leerYConsultarURL = async () => {
    try {
        // Recorrer las URLs definidas en apiUrls
        for (const url of apiUrls) {
            // Obtener datos de la URL
            const { data } = await axios.get(url);

            // Mostrar los datos obtenidos
            console.log(`Datos obtenidos de ${url}:\n`, data);

            // Espera de 1.5 segundos entre solicitudes
            await delay(1000);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
};

leerYConsultarURL();
