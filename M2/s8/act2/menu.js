//DEMO para la utilización de una plataforma bancaría que cumplirá la
//misma faceta de un cajero automático, permitiendo girar y depositar dinero y ver el saldo de la
//cuenta.

//Para poder utilizar esta función, el usuario debe validar su identidad con su identificador y contraseña.
//Una vez que se valide la identidad el usuario podrá ver su saldo, realizar giros o depósitos

//registro clientes clase javascript
//Cada uno de los clientes de nuestro banco contará con un nombre, un identificador, una clave y un saldo en su cuenta

//registro clientes

class Client {
    constructor(id, nombre, clave, saldo = 0) {
        this.id = id;
        this.nombre = nombre;
        this.clave = clave;
        this.saldo = saldo;
    }
    //métodos para realizar operaciones en la cuenta
    verSaldo() {
        return `Tu saldo actual es: $${this.saldo}`;
    }
    depositar(amount) {
        if (amount > 0) {
            this.saldo += amount;
            return `Deposito exitoso. Nuevo saldo: $${this.saldo}`;
        } else {
            return 'No se puede depositar un monto negativo';
        }
    }
    girar(amount) {
        if (amount > 0 && amount <= this.saldo) {
            this.saldo -= amount;
            return `Giro exitoso. Nuevo saldo: $${this.saldo}`;
        } else if (amount > this.saldo) {
            return 'No se puede girar más dinero que su saldo actual';
        } else {
            return 'No se puede girar un monto negativo';
        }
    }
    //métodos para validar la identidad del cliente

    validarIdentidad(id, clave) {
        return this.id === id && this.clave === clave;
    }
    //métodos para generar un número de cuenta
    generarNumeroCuenta() {
        //Generar un número de cuenta aleatorio
        const numeroCuenta = Math.floor(Math.random() * 1000000000);
        return numeroCuenta;
    }
}

// clase banco gestionar multiples clientes

class Banco {
    constructor() {
        this.clientes = [];
    }
    //métodos para gestionar clientes
    registrarCliente(id, nombre, clave, saldo) {
        const cliente = new Client(id, nombre, clave, saldo);
        this.clientes.push(cliente);
        //mensaje cliente regritrado con exito
        console.log(`cliente $${cliente.nombre} registrado correctamente`);
    }
    buscarClientePorId(id) {
        return this.clientes.find((cliente) => cliente.id === id);
    }
    
    iniciarSesion(id, clave) {
        return this.clientes.find(cliente => cliente.id === id && cliente.clave === clave);
    }
    //mostrar menu
    mostrarMenu(cliente) {  
        let opcion ;
        do {
            opcion = parseInt(prompt(`
                Bienvenido ${cliente.nombre}
                1. Ver saldo
                2. Realizar Giro
                3. Realizar depósito
                4. Salir
            `), 10);
            switch (opcion) {
                case 1:
                    alert(cliente.verSaldo());
                    break;    
                case 2:
                    const montoGiro = parseFloat(prompt('Ingrese el monto a girar:'));
                    alert(cliente.girar(montoGiro));
                    break;
                case 3:
                    const montoDeposito = parseFloat(prompt('Ingrese el monto a depositar:'));
                    alert(cliente.depositar(montoDeposito));
                    break;
                case 4:
                    alert('Gracias por usar nuestro cajero. Hasta pronto!');
                    break;
                default:
                    alert('Opción no válida');       
            } 
            
        } while (opcion!== 4);
    }
}

// crear instancia de back

const banco = new Banco();

// registrar clientes

banco.registrarCliente('1234567890', 'Juan', 'juan123', 1000);
banco.registrarCliente('9876543210', 'Pedro', 'pedro123', 2000);
banco.registrarCliente('1234567890', 'Pablo', 'pablo123', 3000);

// iniciar sesión con un prompt

//const idIngresado = prompt('Ingrese su número de identificación:');
//const claveIngresada = prompt('Ingrese su contraseña:');
const cliente = banco.iniciarSesion('1234567890', 'juan123');

// buscar cliente por id y iniciar sesión
//const cliente = banco.iniciarSesion(idIngresado, claveIngresada);
console.log(cliente);
// si el cliente existe

if (cliente) {
    //mostrar menu
    banco.mostrarMenu(cliente);
} else {
    console.log('Error al iniciar sesión');
}






                    

    

 

















