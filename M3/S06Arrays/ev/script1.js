/*

*/

// array par almavenar elementos seleccionados

const selectedItems = [];
//clase menuItem 

class MenuItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    // imprimir por consola el objeto
    printMenuItem() {
        console.log(`Name: ${this.name}, Price: ${this.price}`);
    }
}
console.log(selectedItems);
// funcion paraa agregar o eliminar un item de laaa listaa seleccionadaa
function toggleItem(name, price) {
    console.log(`iniciode la funcion: ${selectedItems} `);
    console.log(JSON.parse(JSON.stringify(selectedItems)));

    const item = new MenuItem(name, price);
    // imprimir por consola el objeto
    console.log(`Item ${name} added to the order`);
    console.log(item);  //

// funcion para actualizar el resumen de la orden
    // veridicar si el item ya estaa en la lista
    const index = selectedItems.findIndex(selectedItem => selectedItem.name === item.name);
    //imprimir por consola el objecto
    
    if (index === -1) {
        // agregar el item a la lista
        selectedItems.push(item);
        console.log(`Item ${name} added to the order`);
    } else {
        // eliminar el item de la lista
        selectedItems.splice(index, 1);
        console.log(`Item ${name} removed from the order`);
    }
    updateOrderSummary();
    //imprimir por consola el objecto
    
    console.log(item);  //
    console.log(`finalización de la función: ${selectedItems} `);
    console.log(JSON.parse(JSON.stringify(selectedItems)));
    

}

// funcion para actualizar el resumen de la orden

function updateOrderSummary() {

    const orderSummary = document.getElementById('order-summary');
    const totalPriceEl = document.getElementById("total-price");  

    // limpiar el contendo del resumen
    orderSummary.innerHTML = "";
    //generar filaas praa cada item seleccionado
    selectedItems.forEach(item => {
        const row = document.createElement('tr');   

        const itemName = document.createElement('td');
        itemName.textContent = item.name;   
        
        const itemPrice = document.createElement('td');
        itemPrice.textContent = `$${item.price.toLocaleString()}`;

        row.appendChild(itemName);
        row.appendChild(itemPrice);        
        orderSummary.appendChild(row);
    });

    // calcular el total de la orden
    const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);
    
    // actualizar el precio total
    totalPriceEl.textContent = `$${totalPrice.toLocaleString()}`;

}


// Limpiar el almacenamiento de checkboxes seleccionados al cargar la página
window.onload = () => {
    localStorage.removeItem('selectedItems'); // Remueve el almacenamiento si está guardado en 'selectedItems'
    resetCheckboxes(); // Función que restablece el estado de los checkboxes
  };
  
  function resetCheckboxes() {
    const checkboxes = document.querySelectorAll('.form-check-input');
    checkboxes.forEach(checkbox => checkbox.checked = false); // Restablece todos los checkboxes a no marcado
  }
