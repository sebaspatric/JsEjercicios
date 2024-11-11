function repite() {
    // Obtenemos los valores desde el input:
    var valor = document.getElementById("valor").value;
    var veces = parseInt(document.getElementById("veces").value);
    //    var veces = parseInt(document.getElementById("veces").value);
  
  
    // Verificamos si el valor de "veces" es un número y mayor que 0
    if (isNaN(veces) || veces <= 0) {
      document.getElementById("resultado").innerHTML = "Por favor ingrese un número válido de veces.";
      return; // Si no es válido, no hacemos nada más
    }
  
    // Limpiar el div de resultados antes de mostrar el nuevo contenido
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";
  
    // Repetimos el valor por la cantidad de veces que indica el usuario:
    for (let i = 0; i < veces; i++) {
        // mostrar por consola
        console.log(`(${i}) ${valor}`);

      resultadoDiv.innerHTML += `(${i}) ${valor}<br>`;
    }
  }
  