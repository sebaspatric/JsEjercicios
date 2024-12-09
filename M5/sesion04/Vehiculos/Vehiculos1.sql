-- 1. Insertar datos de una empresa:
INSERT INTO Empresa (RUT, Nombre, Direccion, Telefono, Correo, Web)
VALUES ('12345678-9', 'Empresa Vehículos S.A.', 'Av. Principal 123', '987654321', 'contacto@empresa.com', 'www.empresa.com');

select * from Empresa;

-- 2. Insertar 2 tipos de vehículos:
INSERT INTO TipoVehiculo (IDTipoVehiculo, Nombre)
VALUES (1, 'Automóvil'), (2, 'Camioneta');

select * from TipoVehiculo;

-- 3. Insertar 3 clientes:
INSERT INTO Cliente (RUT, Nombre, Correo, Direccion, Celular, Alta)
VALUES 
('11111111-1', 'Carlos Pérez', 'carlos@mail.com', 'Calle A 123', '912345678', 'S'),
('22222222-2', 'Ana Gómez', 'ana@mail.com', 'Calle B 456', '923456789', 'S'),
('33333333-3', 'Luis Martínez', 'luis@mail.com', 'Calle C 789', '934567890', 'S');

-- 4. Insertar 2 marcas:
INSERT INTO Marca (IDMarca, Nombre)
VALUES (1, 'Toyota'), (2, 'Ford');

select * from Marca;

-- 5. Insertar 5 vehículos:
INSERT INTO Vehiculo (IDVehiculo, Patente, Marca, Modelo, Color, Precio, FrecuenciaMantenimiento, Marca_IDMarca, TipoVehiculo_IDTipoVehiculo)
VALUES 
(1, 'AAA-111', 'Toyota', 'Corolla', 'Blanco', 15000, 6, 1, 1),
(2, 'BBB-222', 'Toyota', 'Hilux', 'Negro', 30000, 12, 1, 2),
(3, 'CCC-333', 'Ford', 'Fiesta', 'Rojo', 10000, 6, 2, 1),
(4, 'DDD-444', 'Ford', 'Ranger', 'Azul', 25000, 12, 2, 2),
(5, 'EEE-555', 'Toyota', 'Yaris', 'Gris', 12000, 6, 1, 1);

select * from Vehiculo;

-- 6. Eliminar el último cliente:
DELETE FROM Cliente WHERE RUT = '33333333-3';



select * from cliente;

-- 7. Insertar 1 venta para cada cliente:
INSERT INTO Venta (Folio, Fecha, Monto, Vehiculo_IDVehiculo, Cliente_RUT)
VALUES 
(1, '2024-10-15', 15000, 1, '11111111-1'),
(2, '2024-10-15', 30000, 2, '22222222-2');

-- 8. Modificar el nombre del segundo cliente:
UPDATE Cliente
SET Nombre = 'Ana Gómez Modificado'
WHERE RUT = '22222222-2';

UPDATE Cliente
SET Nombre = 'Nuevo Nombre'
WHERE RUT = (
    SELECT RUT 
    FROM Cliente
    ORDER BY RUT
    LIMIT 1 OFFSET 1
);

-- 9. Listar todas las ventas:
SELECT * FROM Venta;

-- 10. Listar las ventas del primer cliente:
SELECT * FROM Venta
WHERE Cliente_RUT = '11111111-1';

SELECT v.Folio, v.Fecha, v.Monto, v.Vehiculo_IDVehiculo, c.Nombre AS Cliente
FROM Venta v
JOIN Cliente c ON v.Cliente_RUT = c.RUT
WHERE c.RUT = (SELECT MIN(RUT) FROM Cliente);


-- 11. Obtener la patente de todos los vehículos:
SELECT Patente FROM Vehiculo;
