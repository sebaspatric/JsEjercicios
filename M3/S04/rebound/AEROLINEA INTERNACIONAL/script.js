//esperar  que caarge el html

function getInfo() {
    // Obtiene los valores seleccionados en los campos de origen y destino
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const formDate = document.getElementById("fromDate").value;
    const toDate = document.getElementById("toDate").value;

    // actualiza el html con los vaalores de origen y destino
    document.getElementById("origin").innerText = `Origen: ${from}`;
    document.getElementById("dest").innerText = `Destino: ${to}`;
    document.getElementById("originDate").innerText = `${formDate}`;   //
    document.getElementById("destDate").innerText = `${toDate}`; //   
    
    // Verifica si el vuelo tiene una escala
    let hasStopover = false;
    if ((from === "Chicago" && to === "Venice") || (from === "Boston" && to === "Paris")) {
        hasStopover = true;
    }
    // Añade la clase "stopover" al div si la escala existe
    const transElement = document.getElementById("trans");
    if (hasStopover) {
        transElement.innerText = "Ojo, tu vuelo tiene un escla";
    } else {
        transElement.innerText = "Tu vuelo no tiene una escala";
    }
}



