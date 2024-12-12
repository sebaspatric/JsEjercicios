var variableVar = "This is a variable variable";
let variableLet = "This is a variable let";
const variableConst = "This is a variable const";

variableVar = "This is a new value for variableVar";
variableLet = "This is a new value for variableLet"; // This will throw an error
console.log(variableLet); // This will still log "This is a variable let"
console.log(variableVar); // This will log "This is a variable const"