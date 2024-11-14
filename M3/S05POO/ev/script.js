// Constructor de empleado con nombre salario y depaartamento con objectPosition: 

// creaar funcion constructoraa para crear objetos de tipo empleado con los atributos nombre salario y departamento en ingles

function Employee(name, salary, department) {
  this.name = name;
  this.salary = salary;
  this.department = department;

// metodos

// metodo para calcular el salario del empleado

this.calculateSalary = function() {
  return this.salary;
};

// metodo para calcular el salario despues de un aumento

this.increaseSalary = function(percentage) {
  this.salary += (this.salary * percentage) / 100;
};

// metodo cambiar el departamento
this.changeDepartment = function(newDepartment) {
  this.department = newDepartment;
};

// metodo para mostrar los detalles del empleado

this.showDetails = function() {
  console.log("Employee Name: " + this.name +", Employee Salary: " + this.salary+", Employee Department: " + this.department);
};

}

// creacion de empleados

var employee1 = new Employee("John Doe", 50000, "Sales");
var employee2 = new Employee("Jane Smith", 60000, "Marketing");
// employee 1 detaalles

employee1.showDetails();

// aumento de salario del empleado 1 en 15%

employee1.increaseSalary(15);

// muestra de nuevo salario del empleado 1

console.log("Employee 1 New Salary: " + employee1.calculateSalary());
employee1.showDetails();

// cambio de departamento del empleado 1

employee1.changeDepartment("Engineering");

// muestra de nuevo departamento del empleado 1

console.log("Employee 1 New Department: " + employee1.department);
employee1.showDetails();
                                                                              