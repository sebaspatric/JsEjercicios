// Clase Producto: Representa un producto en el supermercado
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

// Clase Carrito: Representa el carrito de compras
class Carrito {
  constructor() {
    this.productos = []; // Arreglo para almacenar los productos seleccionados
  }

  // Función para agregar un producto al carrito
  agregarProducto(producto) {
    this.productos.push(producto);
    //alert(`Producto agregado: ${producto.nombre} - $${producto.precio}`);
  }

  // Función para calcular el total de la compra
  calcularTotal() {
    let total = this.productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    return total;
  }

  // Función para aplicar un descuento sobre el total
  aplicarDescuento(descuento) {
    const total = this.calcularTotal();
    const totalConDescuento = total - (total * descuento / 100);
    return totalConDescuento;
  }

  // Función para finalizar la compra
  finalizarCompra() {
    const total = this.calcularTotal();
    alert(`Total de la compra: $${total}`);
    this.productos = []; // Vaciar el carrito después de finalizar la compra
  }

  // Función para mostrar los detalles de la compra
  mostrarDetalles() {
    if (this.productos.length === 0) {
      alert("El carrito está vacío.");
    } else {
      let detalles = "Detalles de la compra:\n";
      this.productos.forEach((producto, index) => {
        detalles += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
      });
      alert(detalles);
    }
  }
}

function mostrarTotalCompra(carrito) {
  const total = carrito.calcularTotal();
  if (carrito.productos.length === 0) {
    alert("El carrito está vacío. No hay productos para calcular el total.");
  } else {
    alert(`El total de tu compra es: $${total.toFixed(2)}`);
  }
}

// Función para validar si un producto existe en el supermercado
function validarProducto(nombre, productosDisponibles) {
  return productosDisponibles.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
}

// Función para pedir al usuario que ingrese un producto
function agregarProductoAlCarrito(carrito, productosDisponibles) {
  if (productosDisponibles.length === 0) {
    alert("No hay productos disponibles para agregar.");
    return;
  }

  // Mostrar productos disponibles con índices
  let mensajeProductos = "Productos disponibles:\n";
  productosDisponibles.forEach((producto, index) => {
    mensajeProductos += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
  });
  alert(mensajeProductos);

  // Solicitar al usuario que seleccione un producto por número
  let seleccion = parseInt(prompt("Ingrese el número del producto que desea agregar:"), 10);

  if (isNaN(seleccion) || seleccion < 1 || seleccion > productosDisponibles.length) {
    alert("Selección no válida. Por favor, inténtelo de nuevo.");
    return;
  }

  // Obtener el producto seleccionado
  const productoSeleccionado = productosDisponibles[seleccion - 1];

  // Solicitar al usuario la cantidad de unidades
  let cantidad = parseInt(prompt(`¿Cuántas unidades de ${productoSeleccionado.nombre} desea agregar?`), 10);

  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Cantidad no válida. Por favor, inténtelo de nuevo.");
    return;
  }

  // Agregar el producto y la cantidad al carrito
  for (let i = 0; i < cantidad; i++) {
    carrito.agregarProducto(productoSeleccionado);
  }

  // Mostrar mensaje con pluralización correcta
  const nombreProducto = productoSeleccionado.nombre;
  const mensajeFinal = `${cantidad} ${nombreProducto}${cantidad > 1 ? '' : ''} agregado(s) al carrito.`;
  alert(mensajeFinal);
}



// Función para continuar agregando productos
function seguirAgregando() {
  const respuesta = prompt("¿Deseas agregar otro producto? (sí/no)").toLowerCase();
  return respuesta === 'sí' || respuesta === 'si';
}

// Función para mostrar los productos disponibles
function mostrarProductosDisponibles(productosDisponibles) {
  let lista = "Productos disponibles:\n";
  productosDisponibles.forEach((producto, index) => {
    lista += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
  });
  alert(lista);
}

// Función para mostrar el menú de opciones
function mostrarMenu() {
  const menu = `
  1. Ver productos disponibles
  2. Agregar producto al carrito
  3. Ver detalles de la compra
  4. Aplicar descuento
  5. Finalizar compra
  6. Salir
  `;
  return prompt(menu);
}

// Función principal para gestionar la compra
function gestionarCompra() {
  // Productos disponibles en el supermercado
  const productosDisponibles = [
    new Producto("Leche", 20),
    new Producto("Pan", 15),
    new Producto("Arroz", 30),
    new Producto("Fruta", 25),
    new Producto("Verduras", 18)
  ];

  const carrito = new Carrito();
  
  let continuar = true;
  
  // Menú de opciones
  while (continuar) {
    const opcion = mostrarMenu();

    switch (opcion) {
      case '1': // Mostrar productos disponibles
        mostrarProductosDisponibles(productosDisponibles);
        break;
      case '2': // Agregar producto al carrito
        agregarProductoAlCarrito(carrito, productosDisponibles);
        break;
      case '3': // Ver detalles del carrito
        carrito.mostrarDetalles();
        break;
      case '4': // Aplicar descuento
        const aplicarDescuento = prompt("¿Deseas aplicar un descuento? (sí/no)").toLowerCase();
        if (aplicarDescuento === 'sí' || aplicarDescuento === 'si') {
          const descuento = parseFloat(prompt("¿Qué porcentaje de descuento deseas aplicar?"));
          if (!isNaN(descuento) && descuento >= 0 && descuento <= 100) {
            const totalConDescuento = carrito.aplicarDescuento(descuento);
            alert(`Total con descuento: $${totalConDescuento.toFixed(2)}`);
          } else {
            alert("Descuento inválido.");
          }
        }
        break;
      case '5': // Finalizar compra
        carrito.finalizarCompra();
        continuar = false; // Terminar el ciclo del menú
        break;
      case '6': // Salir
        continuar = false; // Salir
        break;
      default:
        alert("Opción inválida. Por favor, elige una opción válida.");
    }
  }
}

// Ejecutar la gestión de compra
gestionarCompra();
