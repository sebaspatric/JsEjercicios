console.log("55");

let str = `Hazlo funcionar, hazlo bien, hazlo rápido`;    

console.log(str.replaceAll('hazlo','ABC'))


   
// expresión regular
let patron = /hazlo/gi;
console.log(str.replaceAll(patron, function (match) {
    if (match === 'Hazlo') return '1234';
 if (match === 'hazlo') return 'ABC';
}))


const str1 = ' JavaScript ';
const resultado = str1.trimStart();
console.log({ str1 });
console.log({ resultado });

const str2 = ' JavaScript ';
console.log({ str2 });
const resultado2 = str2.trimEnd();
console.log({ str2 });
console.log({ resultado2 });