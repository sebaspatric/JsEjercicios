//esoerar a que cargue la pagina

document.addEventListener("DOMContentLoaded", () => {
  //agregar el formulario para calcular el area de un circulo

  //crear el contenido de un html con formulario en para calcular el area de un circulo

  const form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "/calculate-area");

  const inputRadius = document.createElement("input");

  inputRadius.setAttribute("type", "number");

  inputRadius.setAttribute("placeholder", "Radio");

  inputRadius.setAttribute("name", "radius");

  const submitButton = document.createElement("input");

  submitButton.setAttribute("type", "submit");

  submitButton.setAttribute("value", "Calcular área");

  form.appendChild(inputRadius);

  form.appendChild(submitButton);

  document.body.appendChild(form);

  //funcion para calcular el area del circulo

  function calculateArea(event) {
    event.preventDefault();

    const radius = parseFloat(event.target.radius.value);

    if (isNaN(radius) || radius <= 0) {
      alert("Radio debe ser un número positivo");

      return;
    }

    const area = Math.PI * Math.pow(radius, 2);

    alert(`El área del círculo es ${area.toFixed(14)}`);
    //agregar mensaje por consola
    console.log(`El área del círculo es ${area.toFixed(14)}`);
    //enviar el formulario al server para calcular el area del circulo
  }

  form.addEventListener("submit", calculateArea);

  //agregar un mensaje por consola que muestre el area calculada 
  console.log(`El área del círculo es ${Math.PI * Math.pow(5, 2).toFixed(2)}`);
 

  
});
