var accesorio;
var clima = "soleado";
// Cuando si se cumple la condición:
accesorio = clima === "soleado" ? "Lentes de sol" : "Paraguas";
console.log(`Dado que el clima es ${clima}, entonces llevaremos
${accesorio}`);
// Cuando no se cumple la condición:
clima = "Lluvia";
accesorio = clima === "soleado" ? "Lentes de sol" : "Paraguas";
console.log(`Dado que el clima es ${clima}, entonces llevaremos
${accesorio}`);
