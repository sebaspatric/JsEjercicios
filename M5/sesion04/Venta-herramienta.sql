-- Insertar una nueva empresa con sus respectivos datos.
INSERT INTO Empresa (RUT, Nombre, Direccion, Telefono, Correo, Web)
VALUES ('12345678-9', 'Herramientas Pro', 'Calle Ejemplo 123', '987654321', 
        'contacto@herrpro.com', 'www.herrpro.com');
select * from empresa;

-- Insertar cinco herramientas con su nombre y precio por día.
INSERT INTO Herramienta (IDHerramienta, Nombre, PrecioDia)
VALUES 
(1, 'Martillo', 1000),
(2, 'Taladro', 5000),
(3, 'Sierra Eléctrica', 7500),
(4, 'Alicates', 2000),
(5, 'Esmeril Angular', 8000);

select * from herramienta;

-- Insertar tres clientes con sus datos de contacto.
INSERT INTO Cliente (RUT, Nombre, Correo, Direccion, Celular)
VALUES 
('11111111-1', 'Juan Pérez', 'juanp@example.com', 'Av. Siempre Viva 742', '912345678'),
('22222222-2', 'María Gómez', 'mariag@example.com', 'Calle Falsa 123', '923456789'),
('33333333-3', 'Carlos Díaz', 'carlosd@example.com', 'Pasaje Esperanza 456', '934567890');

select * from cliente;

-- Eliminar el cliente con el RUT más alto (último cliente insertado).
DELETE FROM Cliente 
WHERE RUT = (SELECT MAX(RUT) FROM Cliente);

-- Eliminar la herramienta con el ID más bajo (primera herramienta insertada).
DELETE FROM Herramienta 
WHERE IDHerramienta = (SELECT MIN(IDHerramienta) FROM Herramienta);

select * from herramienta;

select * from arriendo;

-- Insertar 2 arriendos para cada cliente registrado.

-- Usar CTE para preparar los arriendos y luego insertarlos.
WITH DatosArriendos AS (
    SELECT 
        nextval('arriendo_folio_seq') AS Folio,
        CURRENT_DATE AS Fecha,
        3 AS Dias,
        12000 AS ValorDia,
        'No' AS Garantia,
        1 AS IDHerramienta,
        C.RUT AS Cliente_RUT
    FROM Cliente C
    CROSS JOIN generate_series(1, 2)
)
INSERT INTO Arriendo (Folio, Fecha, Dias, ValorDia, Garantia, Herramienta_IDHerramienta, Cliente_RUT)
SELECT * FROM DatosArriendos;


-- Arriendos para el primer cliente
INSERT INTO Arriendo (Folio, Fecha, Dias, ValorDia, Garantia, Herramienta_IDHerramienta, Cliente_RUT)
VALUES 
(1, '2024-10-01', 5, 1000, 'Garantía A', 1, '11111111-1'),
(2, '2024-10-05', 3, 5000, 'Garantía B', 2, '11111111-1');

-- Arriendos para el segundo cliente
INSERT INTO Arriendo (Folio, Fecha, Dias, ValorDia, Garantia, Herramienta_IDHerramienta, Cliente_RUT)
VALUES 
(3, '2024-10-03', 4, 7500, 'Garantía A', 3, '22222222-2'),
(4, '2024-10-07', 2, 2000, 'Garantía C', 4, '22222222-2');


select* from cliente;
-- Actualizar el correo electrónico del primer cliente.
UPDATE Cliente 
SET Correo = 'nuevoemail@example.com'
WHERE RUT = '11111111-1';

WITH PrimerCliente AS (
    SELECT RUT
    FROM Cliente
    ORDER BY RUT ASC
    LIMIT 1
)
UPDATE Cliente
SET Correo = 'nuevo_correo@ejemplo.com'
WHERE RUT = (SELECT RUT FROM PrimerCliente);


-- Consultar todas las herramientas disponibles en la tabla.
SELECT * FROM Herramienta;


-- Consultar los arriendos realizados por el segundo cliente.
SELECT * 
FROM Arriendo 
WHERE Cliente_RUT = '22222222-2';


WITH SegundoCliente AS (
    SELECT RUT
    FROM Cliente
    ORDER BY RUT ASC
    LIMIT 1 OFFSET 1
)
SELECT * 
FROM Arriendo
WHERE Cliente_RUT = (SELECT RUT FROM SegundoCliente);


-- Seleccionar todos los clientes cuyo nombre contiene la letra 'a'.
SELECT *
FROM Cliente
WHERE Nombre ILIKE '%a%';  -- ILIKE es insensible a mayúsculas/minúsculas.

-- Seleccionar el nombre de la segunda herramienta insertada, ordenadas por IDHerramienta.
SELECT Nombre
FROM Herramienta
ORDER BY IDHerramienta  -- Ordenar por ID para garantizar el orden de inserción.
OFFSET 1 LIMIT 1;       -- Saltar el primer registro y seleccionar el segundo.

-- Actualizar la fecha de los primeros dos arriendos insertados a 15/01/2020.
UPDATE Arriendo
SET Fecha = '2020-01-15'  -- Establecer la nueva fecha.
WHERE Folio IN (          -- Filtrar por los primeros dos folios.
    SELECT Folio
    FROM Arriendo
    ORDER BY Folio       -- Ordenar por Folio para garantizar el orden.
    LIMIT 2              -- Limitar a los primeros 2 resultados.
);

select * from arriendo;

-- Seleccionar Folio, Fecha y ValorDia de los arriendos realizados en enero de 2020.
SELECT Folio, Fecha, ValorDia
FROM Arriendo
WHERE Fecha >= '2020-01-01' AND Fecha < '2020-02-01';  -- Filtrar por el rango de fechas de enero.
