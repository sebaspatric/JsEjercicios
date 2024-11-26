document.getElementById('btn-generar').addEventListener('click', function() {
  const semanas = parseInt(document.getElementById('weeks').value);
  const dias = parseInt(document.getElementById('days').value);

  if (isNaN(semanas) || isNaN(dias) || semanas <= 0 || dias <= 0) {
    alert("Por favor, ingresa valores válidos para las semanas y los días.");
    return;
  }

  // Llamar a la función generadora y mostrar la rutina
  const rutinaGenerada = generarRutina(semanas, dias);
  const rutinaLista = document.getElementById('rutinaLista');
  rutinaLista.innerHTML = ''; // Limpiar la lista antes de agregar los nuevos elementos

  let resultado = rutinaGenerada.next();
  while (!resultado.done) {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = resultado.value;
    rutinaLista.appendChild(li);
    
    // También mostrar el resultado en la consola
    console.log(resultado.value);
    
    resultado = rutinaGenerada.next();
  }
});

// Función generadora para la rutina
function* generarRutina(semanas, dias) {
  const ejercicios = ['Sentadillas', 'Banco', 'Peso Muerto', 'Prensas'];

  for (let i = 1; i <= semanas; i++) {
    yield `Semana ${i}:`;

    for (let j = 1; j <= dias; j++) {
      // Elige un ejercicio aleatorio
      const ejercicio = ejercicios[Math.floor(Math.random() * ejercicios.length)];
      yield ` Día ${j}: ${ejercicio}`;
    }
  }
}
