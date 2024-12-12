const fs = require('fs/promises');
const axios = require('axios');

const numeroAzar = (numeroMaximo) => Math.floor(Math.random() * numeroMaximo -1);

//const leerArchivo = async () => {
//    try {
//        const datos = await fs.readFile('datos.txt', 'utf-8');
//        const arrayDatos = JSON.parse(datos);
//        console.log('Datos leidos:', arrayDatos);
//        const numeroArray = Math.abs(numeroAzar(arrayDatos.length));
//
//        const valorBusqueda = arrayDatos[numeroArray];
//
//        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/${valorBusqueda}`);
//
//        console.log('Número aleatorio:', arrayDatos[numeroArray]);
//        console.log('Información del usuario:', data);
//
//        //return data.split('\n').map(linea => linea.split(','));
//    } catch (error) {
//        console.error('Error al leer el archivo:', error);
//        return [];
//    }
//};
//leerArchivo()

fs.readFile('datos.txt', 'utf-8')
    .then(datos => {
         const arrayDatos = JSON.parse(datos);
         console.log('Datos leidos:', arrayDatos);
         const numeroArray = Math.abs(numeroAzar(arrayDatos.length));
         const valorBusqueda = arrayDatos[numeroArray];
         return axios.get(`https://jsonplaceholder.typicode.com/${valorBusqueda}`);
    })
    .then(response => {
         const {data} = response;
         console.log(data);
    })