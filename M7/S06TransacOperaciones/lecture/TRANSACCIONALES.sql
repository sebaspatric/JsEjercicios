-- Ejecutar múltiples operaciones transaccionales con instrucción COMMIT
Begin;
CREATE TABLE Emp_Test1 (emp_id INT NOT NULL, 
						emp_name character(10) NOT NULL, 
						emp_address character(20) NOT NULL, 
						emp_phone character(14), 
						emp_salary INT NOT NULL, 
						date_of_joining date NOT NULL);

INSERT INTO Emp_Test1 (emp_id, emp_name, emp_address, emp_phone,
emp_salary, date_of_joining) VALUES (1, 'ABC', 'Pune', '1234567890',
20000, '01-01-2020');
INSERT INTO Emp_Test1 (emp_id, emp_name, emp_address, emp_phone,
emp_salary, date_of_joining) VALUES (2, 'PQR', 'Pune', '1234567890',
20000, '01-01-2020');
INSERT INTO Emp_Test1 (emp_id, emp_name, emp_address, emp_phone,
emp_salary, date_of_joining) VALUES (3, 'XYZ', 'Mumbai',
'1234567890', 35000, '02-01-2020');
End transaction;
Commit;