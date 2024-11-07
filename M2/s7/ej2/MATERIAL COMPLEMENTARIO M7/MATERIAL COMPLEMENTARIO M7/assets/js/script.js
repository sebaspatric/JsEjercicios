//var opcion = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas")

//FUNCIONES



// funcion mstrar menu con prompt   




// FUNCIONES DE CADA OPCION




// Función para validar la opción ingresada por el usuario
function validarMenu(opcion) {
    if (isNaN(opcion) || opcion < 1 || opcion > 4) {
        alert("Opción inválida. Por favor, elige una opción entre 1 y 4.");
        return false;
    }
    return true;
}

// Función para mostrar el menú y capturar la opción del usuario
function mostrarMenu() {
    let opcion;

    do {
        opcion = prompt(
            "Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesites.\n" +
            "Escribe el número de la opción que buscas:\n" +
            "1.- Boletas y Pagos\n" +
            "2.- Señal y llamadas\n" +
            "3.- Oferta comercial\n" +
            "4.- Otras consultas"
        );

        // Si el usuario cancela el prompt
        if (opcion === null) {
            alert("Operación cancelada. ¡Hasta pronto!");
            return;
        }

    } while (!validarMenu(Number(opcion)));  // Repite mientras la opción sea inválida

    manejarOpcion(Number(opcion));  // Llama a la opción elegida
}

// Función que maneja la opción seleccionada usando switch-case
function manejarOpcion(opcion) {
    switch (opcion) {
        case 1:
            boletasPagos();
            break;
        case 2:
            senalLlamadas();
            break;
        case 3:
            ofertaComercial();
            break;
        case 4:
            otrasConsultas();
            break;
        default:
            alert("Opción no válida. Gracias por preferir nuestros servicios");
            break;
    }
}

// Función para la opción "Boletas y Pagos"

// Función para la opción "Boletas y Pagos"
function boletasPagos() {
    let opcion;

    do {
        opcion = prompt(
            "Seleccione una opción:\n" +
            "1.- Ver Boleta\n" +
            "2.- Pagar cuenta"
        );

        // Si el usuario cancela el prompt
        if (opcion === null) {
            alert("Operación cancelada.");
            return;
        }

    } while (isNaN(opcion) || opcion < 1 || opcion > 2); // Validación de opción

    switch (Number(opcion)) {
        case 1:
            verBoleta();
            break;
        case 2:
            pagarCuenta();
            break;
    }
}

// Función para ver la boleta
function verBoleta() {
    alert("Mostrando tu boleta: \nMonto: $50.000 \nFecha de vencimiento: 10/11/2024.\n\nHaga clic aquí para descargar su boleta");
}

// Función para pagar la cuenta
function pagarCuenta() {
    alert("Redirigiendo a la plataforma de pago...");
}


// Función para la opción "Señal y Llamadas"
function senalLlamadas() {
    let opcion;
    do {
        opcion = prompt(
            "Seleccione una opción:\n" +
            "1.- Problemas con la señal\n" +
            "2.- Problemas con las llamadas"
        );
        // Si el usuario cancela el prompt
        if (opcion === null) {
            alert("Operación cancelada.");
            return;
        }
} while (isNaN(opcion) || opcion < 1 || opcion > 5);

    switch (Number(opcion)) {
        case 1:
            problemasSenal();
            break;
        case 2:
            problemasLlamadas();
            break;

    }
}

// Función para problemas con la señal
function problemasSenal() {
    let senal = prompt("A continuación escriba su solicitud\n o Contáctanos al 1234-5678 para ayudarte con tu problema con la señal.");
}

// Función para problemas con las llamadas
function problemasLlamadas() {
    let llamadas = prompt("A continuación escriba su solicitud\n o Contáctanos al 1234-5678 para ayudarte con tu problema con las llamadas.");
}



// Función para la opción "Oferta Comercial"
function ofertaComercial() {
    let opcion;
    //alert("Oferta Comercial que est ");
    do {
        opcion = prompt(
            "Has seleccionado 'Oferta Comercial'.\n¡Mentel tiene una oferta comercial acorde a tus necesidades!\nPara conocer más información y ser asesorado personalmente por un\nejecutivo escribe 'SI' y un ejecutivo te llamará. De lo contrario ingrese\n'NO' \nwww.mentel.com/ofertas.");
        // Si el usuario cancela el prompt
        if (opcion === null) {
            alert("Operación cancelada.");
            return;
        }
    } while (opcion.toLowerCase()!== "si" && opcion.toLowerCase()!== "no");
    
    // Validación de opción llmanda funciones
    if (opcion.toLowerCase() === "si") {
        llamarEjecutivo();
    } else {
        ofertasComerciales();
}
}


//funcion llamada ejecutivo

function llamarEjecutivo() {
    alert("Un ejecutivo se contactará con usted");
}

//funcion ofertas comerciales

function ofertasComerciales() {
    alert("Gracias por preferir nuestros servicios\nTe enviamos tus ofertas comerciales en tu correo electrónico");
}

    

 

// Función para la opción "Otras Consultas"
function otrasConsultas() {
    let consulta = prompt("A continuación escriba su consulta");  
    respuestaCONSULTA(consulta);  
}

// Función para responder a la consulta

function respuestaCONSULTA(consulta) {
    alert("Estimado usuario, su consulta: " + "'"+consulta + "'" + 
        " Ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.");
}

// Llamada al menú inicial
mostrarMenu();

