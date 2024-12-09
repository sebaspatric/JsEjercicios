-- Tabla empresa
INSERT INTO empresa (rut, nombre, direccion, telefono, correo, web) VALUES
('11111111-1', 'Empresa 1', 'Av. Principal 123', '987654321', 'contacto@empresa1.cl', 'www.empresa1.cl'),
('22222222-2', 'Empresa 2', 'Calle Secundaria 456', '912345678', 'contacto@empresa2.cl', 'www.empresa2.cl');

-- Tabla cliente
INSERT INTO cliente (rut, nombre, correo, direccion, celular, alta) VALUES
('33333333-3', 'Juan Pérez', 'juan.perez@gmail.com', 'Calle A 789', '987654321', 'S'),
('44444444-4', 'Ana Gómez', 'ana.gomez@gmail.com', 'Av. B 321', '912345678', 'S');
select * from marca;
-- Tabla marca
INSERT INTO marca (idMarca, nombre) VALUES
(1, 'Toyota'),
(2, 'Honda'),
(3, 'Ford');

-- Tabla tipoVehiculo
INSERT INTO tipoVehiculo (idTipoVehiculo, nombre) VALUES
(1, 'Sedán'),
(2, 'SUV'),
(3, 'Camioneta');

select * from vehiculo;
-- Tabla vehiculo
INSERT INTO vehiculo (idVehiculo, patente, marca, modelo, color, precio, frecuenciamantenimiento, marca_idmarca, tipovehiculo_idTipovehiculo) VALUES
(1, 'ABC123', 'Corolla', '2020', 'Rojo', 15000, 6, 1, 1),
(2, 'DEF456', 'Civic', '2019', 'Negro', 18000, 6, 2, 1),
(3, 'GHI789', 'Ranger', '2020', 'Blanco', 25000, 12 , 3, 3);

-- Tabla venta
INSERT INTO venta (folio, fecha, monto, vehiculo_idVehiculo, cliente_rut) VALUES
(1001, '2020-01-10', 15000, 1, '33333333-3'),
(1002, '2020-01-15', 18000, 2, '44444444-4');

-- Tabla mantención
INSERT INTO mantenimiento (idMantenimiento, fecha, trabajosRealizados, venta_folio) VALUES
(1, '2020-06-10', 'Cambio de aceite', 1001),
(2, '2020-06-20', 'Revisión general', 1002);

-- 1. Listar todos los vehículos que no han sido vendidos.
-- Seleccionamos todos los vehículos que no tienen registros en la tabla de ventas
SELECT *
FROM vehiculo
WHERE idVehiculo NOT IN (SELECT vehiculo_idVehiculo FROM venta);

-- Seleccionamos todos los vehículos y filtramos para obtener solo los que no han sido vendidos
SELECT v.idVehiculo, v.patente, v.marca, v.modelo, v.color, v.precio,
       v.marca_idMarca, v.tipovehiculo_idTipoVehiculo
FROM vehiculo v
LEFT JOIN venta vt ON v.idVehiculo = vt.vehiculo_idVehiculo
WHERE vt.vehiculo_idVehiculo IS NULL; -- Filtramos solo los vehículos no vendidos

-- --------------------------------------------------------------------------------
-- 2. Listar todas las ventas de enero del 2020 con las columnas: Folio, FechaVenta, MontoVenta, NombreCliente, RutCliente, Patente, NombreMarca, y Modelo.

SELECT 
    vta.folio AS Folio,
    vta.fecha AS FechaVenta,
    vta.monto AS MontoVenta,
    c.nombre AS NombreCliente,
    c.rut AS RutCliente,
    veh.patente AS Patente,
    m.nombre AS NombreMarca,
    veh.modelo AS Modelo
FROM 
    venta vta
JOIN 
    cliente c ON vta.cliente_rut = c.rut
JOIN 
    vehiculo veh ON vta.vehiculo_idVehiculo = veh.idVehiculo
JOIN 
    marca m ON veh.marca_idmarca = m.idMarca
WHERE 
    vta.fecha BETWEEN '2020-01-01' AND '2020-01-31'
ORDER BY 
    vta.folio;

	
-- 3. Sumar las ventas por mes y marca del año 2020.
SELECT 
    TO_CHAR(vta.fecha, 'YYYY-MM') AS Mes, 
    m.nombre AS Marca, 
    SUM(vta.monto) AS TotalVentas
FROM 
    venta vta
JOIN 
    vehiculo veh ON vta.vehiculo_idVehiculo = veh.idVehiculo
JOIN 
    marca m ON veh.marca_idMarca = m.idMarca
WHERE 
    EXTRACT(YEAR FROM vta.fecha) = 2020
GROUP BY 
    Mes, m.nombre
ORDER BY 
    Mes, Marca;



-- 4. Listar Rut y Nombre de las tablas cliente y empresa.
SELECT rut, nombre, 'Cliente' AS tipo_entidad
FROM cliente

UNION

SELECT rut, nombre, 'Empresa' AS tipo_entidad
FROM empresa;
