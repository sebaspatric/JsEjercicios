const dividir = (a, b) => a / b;
console.log(dividir(50, 2)) //25
console.log(dividir(5)) // NaN

function sumar(x, y = 10) {
    // y es 10 si no se pasa o no se define
    return x + y;
    }
    document.getElementById("d1").innerHTML =  sumar(5, 3);

const saludar = (nombre, saludo, mensaje = `¿Cómo has estado
    ${nombre}?`) => {
    return [nombre, saludo, mensaje]
    }
    console.log(saludar("Javier", 'Buenos días'))
    console.log(saludar("Javier", 'Buenos días', "¿Que tal?"))
function funcionConRest(a, b, ...muchosArgMas) {
    console.log(`a: ${a}`)
    console.log(`b: ${b}`)
    console.log("muchosArgMas:", muchosArgMas)
    }
    //Ingresamos muchos parámetros:
    funcionConRest("uno", "dos", "tres", "cuatro", "cinco", "seis")
        