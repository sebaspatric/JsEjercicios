let autos = ["Toyota", "Nissan", "Honda", "Lexus"];
let text = "";
for(let x of autos) {
text += x + "<br>";
}
document.getElementById("d1").innerHTML = text;

//Itirando sobre un String:
const iterable = 'hola mundo';
for(const valor of iterable) {
console.log(valor);
}

console.log(" ");
const array = ["f", "b", "c", "d", "e"]; 
			for(let blank of array) { 
			console.log(blank) 
			} 