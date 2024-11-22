// symbols paara propiedades privadas
const salario = Symbol('salario');
const datosPersonales = Symbol('datosPersonales');

// clase datos personales
class DatosPersonales {
    constructor(edad, direccion) {
        this.edad = edad;
        this.direccion = direccion;
    }
}

//clase que representa un rol
class Role {
    constructor(tipo, permisos = []) {
        this.tipo = tipo;
        this.permisos = new Set(permisos); 
    }
    // verifica si el rol tiene un persmiso especifico
    tienePermiso(permiso) {
        return this.permisos.has(permiso);
    }
}

// Clase Empleado

class Empleado {
    constructor(nombre, salarioInicial, datosPersonalesIniciales, role) {
        this[salario] = salarioInicial;
        this[datosPersonales] = datosPersonalesIniciales;
        this._nombre = nombre;
        //this.apellido = apellido;
        this._role = role;
    }

    // metodo publico para acceder al nombre
    get nombre() {
        return this._nombre;
    }
    
    // metodo publico para modificar el nombre
    set nombre(nuevoNombre) { 
        this._nombre = nuevoNombre;
    }
}

// metodos seguros para operar sobre un empleado
class SecureMethods {
    static verSalario(target) {
        if (target._role.tienePermiso("acceso_privado")) { 
            return target[salario];
        } 
        console.log("acceso denegado al salario"); 
        return undefined;
    }

    static actualizarSalario(target, nuevoSalario) {
        if (target._role.tienePermiso("modificar_privado")) { 
            target[salario] = nuevoSalario;
            console.log("Salario actualizado con éxito");
            return true;
        } 
        console.log("acceso denegado para actualizar el salario");
        return false;
    }

    static verDatosPersonales(target) {
        if (target._role.tienePermiso("acceso_privado")) { 
            return target[datosPersonales];
        } 
        console.log("acceso denegado a los datos personales");
        return undefined;
    }

    static actualizarDatosPersonales(target, nuevosDatos) {
        if (target._role.tienePermiso("modificar_privado")) { 
            target[datosPersonales] = nuevosDatos;
            console.log("Datos personales actualizados con éxito");
            return true;
        } 
        console.log("acceso denegado para actualizar los datos personales");
        return false;
    }
}

// proxy para controlar acceso y agregar métodos seguros
const empleadoHandler = {
    get(target, prop) {
        //retornar metodos seguros si existen
        if (SecureMethods[prop]) {
            return SecureMethods[prop].bind(null, target);
        }
        // acceso normal a propiedades usando Reflect
        if (Reflect.has(target, prop)) {
            return Reflect.get(target, prop);
        }
        
        console.log(`La propiedad ${String(prop)} no existe`);
        return undefined;
    }
}

// crear roles con permisos específicos
const roles = new Map([
    ['ADMIN', new Role('ADMIN', ['acceso_privado', 'actualizar_privado','modificar_privado'])],
    ['MANAGER', new Role('MANAGER', ['acceso_privado'])],
    ['EMPLOYE', new Role('EMPLOYE', [])]
]);







// crear un empleado y envolverlo con un Proxy
const datosJuan = new DatosPersonales(30, 'Calle Falsa 123');
const juan = new Empleado("Juan", 50000, datosJuan, roles.get("EMPLOYE"));
const proxiedJuan = new Proxy(juan, empleadoHandler); 

//ejemplo de uso

console.log(proxiedJuan.verSalario()); //acceso denegado
console.log(proxiedJuan.verDatosPersonales()); // Acceso denegado aa los datos personales

juan._role = roles.get("MANAGER");
console.log(proxiedJuan.verSalario()); // 50000
console.log(proxiedJuan.verDatosPersonales()); // { edad : 30, direccion: Calle falsa}

juan._role = roles.get("ADMIN");
proxiedJuan.actualizarSalario(60000); // salario actualizado con exito
proxiedJuan.actualizarDatosPersonales(new DatosPersonales(31, 'Calle Verde 456')); // daatos personales actualizados con éxito
/*


// Crear un empleado y envolverlo con un Proxy
const datosJuan = new DatosPersonales(30, "Calle Falsa 123");
const juan = new Empleado("Juan", 50000, datosJuan, roles.get("EMPLOYE"));
const proxiedJuan = new Proxy(juan, empleadoHandler);

// Ejemplo de uso
console.log("Rol: EMPLOYE");
console.log(proxiedJuan.nombre); // "Juan"
console.log(proxiedJuan.verSalario()); // Acceso denegado al salario
console.log(proxiedJuan.verDatosPersonales()); // Acceso denegado a los datos personales

console.log("\nCambiando rol de Juan a MANAGER");
juan._role = roles.get("MANAGER");
console.log(proxiedJuan.verSalario()); // 50000
console.log(proxiedJuan.verDatosPersonales()); // DatosPersonales { edad: 30, direccion: 'Calle Falsa 123' }

console.log("\nCambiando rol de Juan a ADMIN");
juan._role = roles.get("ADMIN");
proxiedJuan.actualizarSalario(60000); // Salario actualizado con éxito
proxiedJuan.actualizarDatosPersonales(31, "Nueva Dirección"); // Datos personales actualizados con éxito

console.log("\nDespués de la actualización de ADMIN:");
console.log(proxiedJuan.verSalario()); // 60000
console.log(proxiedJuan.verDatosPersonales()); // DatosPersonales { edad: 31, direccion: 'Nueva Dirección' }



*/