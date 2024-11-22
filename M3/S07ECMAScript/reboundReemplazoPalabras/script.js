//sed = Veces que el codigo logra reemplazar la palabra "sed"
//let sed = 0;
//sed ||= (sed ==6)
//console.log(`%csed: ${sed}`,'color: #FF5500')

let texto = document.getElementById("textoOriginal").innerText;

const palabrasReemplazo = [
  { palabra: /sed/gi, reemplazo: "UNO", color: "#FF5500", veces: 6 },
  { palabra: /vehicula/gi, reemplazo: "DOS", color: "#FF99B2", veces: 4 },
  { palabra: /vivamus/gi, reemplazo: "TRES", color: "#FF99F5", veces: 3 },
  { palabra: /nam/gi, reemplazo: "CUATRO", color: "#BB99FF", veces: 3 },
  { palabra: /eros/gi, reemplazo: "CINCO", color: "#99C5FE", veces: 2 },
  { palabra: /vestibulum/gi, reemplazo: "SEIS", color: "#00CEFF", veces: 2 },
  { palabra: /quam/gi, reemplazo: "SIETE", color: "#01FFFE", veces: 2 },
  { palabra: /sollicitudin/gi, reemplazo: "OCHO", color: "#00FF9F", veces: 2 },
  { palabra: /finibus/gi, reemplazo: "NUEVE", color: "#B6FF01", veces: 2 },
  { palabra: /dictum/gi, reemplazo: "DIEZ", color: "#FFFF00", veces: 2 },
  { palabra: /morbi/gi, reemplazo: "ONCE", color: "#FFB600", veces: 2 }
];

const contadorReemplazos = {};

palabrasReemplazo.forEach(({ palabra, reemplazo, color, veces }) => {
  let contador = 0;
  texto = texto.replaceAll(palabra, (match) => {
    contador++;
    return `<b>${reemplazo}</b>`;
  });

  // Validar si se alcanzó el número de reemplazos esperado
  contador ||= (contador === veces);
  contadorReemplazos[palabra] = contador;

  // Imprimir en consola el conteo de reemplazos en el color correspondiente
  console.log(`%c${reemplazo}.${palabra.source}: ${contador}`, `color: ${color}`);
});
console.log(contadorReemplazos);


// Mostrar el texto modificado en el HTML
document.getElementById("textoOriginal").innerHTML = texto;
