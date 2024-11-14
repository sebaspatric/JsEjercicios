function Auto(marca, modelo, anio, combustible){
  this.marca = marca;
  this.modelo = modelo;  
  this.year = anio;
  this.fuel = combustible;
  this.encender = function(){
    console.log(`${marca} encendido.`);
  }
}

var subaru = new Auto('subaru', 'WRX', 2015, 'Diesel');
console.log(subaru);




function Auto(marca, modelo, anio, combustible) {
 this.marca = marca;
 this.modelo = modelo;
 this.año = anio;
 this.combustible = combustible;
 this.encender = function () {
 console.log(`${marca} encendido.`)
 }
}


var toyota = new Auto('toyota','Supra', 2020, 'Diesel');
console.log(toyota);