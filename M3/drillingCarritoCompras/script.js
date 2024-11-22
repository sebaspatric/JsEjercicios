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

  // Método para agregar un producto al carrito
  agregarProducto(producto, cantidad) {
      // Verificar si el producto ya está en el carrito
      let productoExistente = this.productos.find(item => item.producto.nombre === producto.nombre);
      
      if (productoExistente) {
          // Si el producto ya está, simplemente sumamos la cantidad
          productoExistente.cantidad += cantidad;
      } else {
          // Si no está, lo agregamos como nuevo con la cantidad
          this.productos.push({ producto, cantidad });
      }
      alert(`${cantidad} unidad(es) de ${producto.nombre} agregado(s) al carrito.`);
  }

  // Método para eliminar un producto del carrito
  eliminarProducto(index) {
      if (index >= 0 && index < this.productos.length) {
          let productoEliminado = this.productos.splice(index, 1);
          alert(`${productoEliminado[0].producto.nombre} eliminado del carrito.`);
      } else {
          alert("Producto no encontrado en el carrito.");
      }
  }

  // Método para editar la cantidad de un producto en el carrito
  editarCantidad(index, nuevaCantidad) {
      if (index >= 0 && index < this.productos.length) {
          let producto = this.productos[index];
          if (nuevaCantidad > 0) {
              producto.cantidad = nuevaCantidad;
              alert(`La cantidad de ${producto.producto.nombre} ha sido actualizada a ${nuevaCantidad}.`);
          } else {
              alert("La cantidad debe ser mayor a 0.");
          }
      } else {
          alert("Producto no encontrado en el carrito.");
      }
  }

  // Método para calcular el total de la compra
  calcularTotal() {
      return this.productos.reduce((acumulador, item) => acumulador + (item.producto.precio * item.cantidad), 0);
  }

  // Método para ver todos los productos en el carrito
  verProductos() {
      if (this.productos.length === 0) {
          alert("El carrito está vacío.");
      } else {
          let lista = "Productos en el carrito:\n";
          this.productos.forEach((item, index) => {
              lista += `${index + 1}. ${item.producto.nombre} - $${item.producto.precio} x ${item.cantidad} unidad(es)\n`;
          });
          alert(lista);
      }
  }

  // Método para finalizar la compra
  finalizarCompra() {
      const total = this.calcularTotal();
      alert(`Total de la compra: $${total.toFixed(2)}`);
      this.productos = []; // Vaciar el carrito después de finalizar la compra
  }

  // Método para mostrar el total de la compra con lista de productos y su total
  mostrarTotalConDetalles() {
      if (this.productos.length === 0) {
          alert("El carrito está vacío.");
          return;
      }
      
      let detalles = "Detalles de la compra:\n";
      let totalCompra = 0;
      
      // Mostrar cada producto con su cantidad y precio total
      this.productos.forEach(item => {
          let totalProducto = item.cantidad * item.producto.precio;
          detalles += `${item.producto.nombre} - ${item.cantidad} unidad(es) - $${totalProducto.toFixed(2)}\n`;
          totalCompra += totalProducto;
      });

      detalles += `\nTotal de la compra: $${totalCompra.toFixed(2)}`;
      alert(detalles);
  }
}

// Proxy para interceptar operaciones en el carrito
const carritoHandler = {
  get: function(target, prop) {
      return target[prop];
  },

  set: function(target, prop, value) {
      target[prop] = value;
      return true;
  }
};

// Crear una instancia del carrito y envolverla en un Proxy
const carrito = new Proxy(new Carrito(), carritoHandler);

// Lista de productos disponibles
const productosDisponibles = [
  new Producto("Leche", 20),
  new Producto("Pan", 15),
  new Producto("Arroz", 30),
  new Producto("Fruta", 25),
  new Producto("Verduras", 18)
];

// Función para agregar un producto al carrito
function agregarProducto() {
  let mensajeProductos = "Productos disponibles:\n";
  productosDisponibles.forEach((producto, index) => {
      mensajeProductos += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
  });

  let seleccion = prompt(mensajeProductos + "Seleccione el número del producto que desea agregar (o presione 'Cancelar' para salir):");

  // Si el usuario presiona la "X" o "Cancelar"
  if (seleccion === null) {
      alert("Operación cancelada.");
      return; // Regresar al menú
  }

  if (isNaN(seleccion) || seleccion < 1 || seleccion > productosDisponibles.length) {
      alert("Selección no válida. Por favor, elige un número de producto válido.");
      return;
  }

  let productoSeleccionado = productosDisponibles[seleccion - 1];

  let cantidad = prompt(`¿Cuántas unidades de ${productoSeleccionado.nombre} desea agregar al carrito? (o presione 'Cancelar' para salir)`);

  // Si el usuario presiona la "X" o "Cancelar"
  if (cantidad === null) {
      alert("Operación cancelada.");
      return; // Regresar al menú
  }

  if (isNaN(cantidad) || cantidad <= 0) {
      alert("Cantidad no válida. Debe ingresar un número mayor a 0.");
      return;
  }

    // Usar el Proxy para agregar el producto
    carrito.agregarProducto(productoSeleccionado, parseInt(cantidad));

  // Preguntar si desea seguir agregando productos
  let seguirAgregando = prompt("¿Deseas seguir agregando productos? (sí/no)").toLowerCase();
  if (seguirAgregando === "sí" || seguirAgregando === "si") {
      agregarProducto(); // Llamar recursivamente para agregar más productos
  }
}

// Función para eliminar un producto del carrito
function eliminarProducto() {
  if (carrito.productos.length === 0) {
      alert("El carrito está vacío, no hay productos para eliminar.");
      return;
  }

  carrito.verProductos(); // Mostrar los productos en el carrito

  let index;
  // Validación para asegurarse de que el índice sea válido
  do {
      index = parseInt(prompt("Ingrese el número del producto que desea eliminar del carrito:")) - 1;
      if (isNaN(index) || index < 0 || index >= carrito.productos.length) {
          alert("Selección no válida. Intente nuevamente.");
      }
  } while (isNaN(index) || index < 0 || index >= carrito.productos.length);

  carrito.eliminarProducto(index);
}

// Función para editar la cantidad de un producto en el carrito
function editarProducto() {
  if (carrito.productos.length === 0) {
      alert("El carrito está vacío, no hay productos para editar.");
      return;
  }

  carrito.verProductos(); // Mostrar los productos en el carrito

  let index;
  let nuevaCantidad;
  // Validación para asegurarse de que el índice y la cantidad sean válidos
  do {
      index = parseInt(prompt("Ingrese el número del producto que desea editar del carrito:")) - 1;
      if (isNaN(index) || index < 0 || index >= carrito.productos.length) {
          alert("Selección no válida. Intente nuevamente.");
      }
  } while (isNaN(index) || index < 0 || index >= carrito.productos.length);

  do {
      nuevaCantidad = parseInt(prompt(`¿Cuál es la nueva cantidad de ${carrito.productos[index].producto.nombre}?`));
      if (isNaN(nuevaCantidad) || nuevaCantidad <= 0) {
          alert("Cantidad no válida. Debe ingresar un número mayor a 0.");
      }
  } while (isNaN(nuevaCantidad) || nuevaCantidad <= 0);

  carrito.editarCantidad(index, nuevaCantidad);
}

// Función para ver los productos en el carrito
function verCarrito() {
  carrito.verProductos();
}

// Función para ver el total con los detalles de la compra
function verTotalCompra() {
  carrito.mostrarTotalConDetalles();
}

// Función para finalizar la compra
function finalizarCompra() {
  carrito.finalizarCompra();
}

// Función para mostrar el menú de opciones
function mostrarMenu() {
  const menu = `
  1. Ver productos disponibles
  2. Agregar producto al carrito
  3. Ver productos en el carrito
  4. Eliminar producto del carrito
  5. Editar cantidad de un producto
  6. Ver el total de la compra
  7. Finalizar compra
  8. Salir
  `;
  let opcion = prompt(menu);

  return opcion; // Retornar la opción seleccionada
}

// Función para mostrar los productos disponibles
function mostrarProductosDisponibles() {
  let lista = "Productos disponibles:\n";
  productosDisponibles.forEach((producto, index) => {
      lista += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
  });
  alert(lista);
}

// Función para gestionar la compra
function gestionarCompra() {
  while (true) {
      let opcion = mostrarMenu(); // Mostrar el menú y capturar la opción
   // Si el usuario presiona "Cancelar", salir del ciclo
   if (opcion === null) {
    alert("Gracias por visitar. ¡Hasta luego!");
    break;
}
      switch(opcion) {
          case '1':
              mostrarProductosDisponibles();
              break;
          case '2':
              agregarProducto();
              break;
          case '3':
              verCarrito();
              break;
          case '4':
              eliminarProducto();
              break;
          case '5':
              editarProducto();
              break;
          case '6':
              verTotalCompra();
              break;
          case '7':
              finalizarCompra();
              break;
          case '8':
              alert("¡Gracias por tu compra!");
              return; // Salir del ciclo y finalizar la ejecución
          default:
              alert("Opción no válida. Por favor, selecciona una opción correcta.");
      }
  }
}

// Iniciar la gestión del carrito de compras
gestionarCompra();
