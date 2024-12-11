var verdaderoFalo;

var entero1 = 234;

var entero2 = 456;

var valorLimite = 100;

function saludaDespide(valorVerdaderoFalso) {
    if (valorVerdaderoFalso) {
        console.log('Hola Mundo!');
    } else {
        console.log('Hasta pronto mundo');
    }
}

// bloque para definir nuestra variable verdaderoFalso
// version context.createLinearGradient(x1, y1, x2, y2);

if ((entero1 + entero2) > valorLimite) {
    verdaderoFalso = true;
} else {
    verdaderoFalso = false;
}

/*
    Utilizamos la función saludaDespide() para imprimir en consola
    el mensaje correspondiente según el valor de verdaderoFalso
*/

verdaderoFalo = (entero1 + entero2) > valorLimite;

// invocacion de funbcion

saludaDespide(verdaderoFalso);
