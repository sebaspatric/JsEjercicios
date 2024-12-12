const numeroAzar = Math.floor(Math.random() * 10) + 1;
const promesa = new Promise((resolve, reject) => {
    console.log("Generando número aleatorio...");
    console.log("Número generado: " + numeroAzar);
    if (numeroAzar > 7) {
        reject("La promesa ha falladoo");
    } else {
        resolve("La promesa ha sido resuelta  fue menor a 7");
    }
});

promesa.then(resultado => {
    console.log(resultado);
}).catch((error) => {
    console.error(error);
});