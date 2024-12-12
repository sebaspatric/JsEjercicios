const animal = {
    especie: 'tiburon',
    tipo: 'salvaje',
    nombre: 'ray charles',
    ambiente: 'mar',
    comnida: 'doritos',
    pasatiempos: 'cantar',
    cantidadDientes: undefined,
    edad: 80
};

console.log('Especie:', animal.especie);

const { especie, tipo, nombre, ambiente, comnida, pasatiempos, cantidadDientes, edad } = animal;

console.log('Especie:', especie);

console.log('Tipo:', tipo);

console.log('Nombre:', nombre);

console.log('Ambiente:', ambiente);

console.log('Comida:', comnida);

console.log('Pasatiempos:', pasatiempos);