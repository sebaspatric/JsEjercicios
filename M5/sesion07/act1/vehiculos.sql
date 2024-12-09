-- 1. Listar los clientes sin ventas por medio de una subconsulta.
select * from cliente;
select * from venta;

SELECT C.RUT, C.Nombre, C.Correo, C.Direccion, C.Celular, C.Alta
FROM Cliente C
LEFT JOIN Venta V ON C.RUT = V.Cliente_RUT
WHERE V.Folio IS NULL;

SELECT RUT, Nombre, Correo, Direccion, Celular, Alta
FROM Cliente C
WHERE NOT EXISTS (
    SELECT 1 
    FROM Venta V
    WHERE V.Cliente_RUT = C.RUT
);

SELECT RUT, Nombre, Correo, Direccion, Celular, Alta
FROM Cliente
WHERE RUT NOT IN (
    SELECT Cliente_RUT
    FROM Venta
);

-- ------------------------------------------------
-- 2. Listar todas ventas con las siguientes columnas: Folio, Fecha, Monto, NombreCliente, RutCliente.
SELECT 
    V.Folio, 
    V.Fecha, 
    V.Monto, 
    (SELECT C.Nombre FROM Cliente C WHERE C.RUT = V.Cliente_RUT) AS NombreCliente, 
    V.Cliente_RUT AS RutCliente
FROM 
    Venta V;


-- -----------------------------------------------------
-- 3. Clasificar los clientes según la siguiente tabla
'''
Total de ventas anuales entre	Clasificación
O a 1.000.000	Standar
1.000.001 y 3.000.000	Gold
3.000.001 0 más	premiun
'''
ALTER TABLE Venta ADD COLUMN Folio_New SERIAL;
UPDATE Venta SET Folio_New = Folio;
ALTER TABLE Mantenimiento DROP CONSTRAINT mantenimiento_venta_fk;
ALTER TABLE Venta DROP COLUMN Folio; -- Eliminar Folio original
ALTER TABLE Venta RENAME COLUMN Folio_New TO Folio;
ALTER TABLE public.venta
ADD CONSTRAINT venta_pkey PRIMARY KEY (folio);
ALTER TABLE public.venta
DROP CONSTRAINT venta_pkey;  -- Cambia el nombre si es diferente
ALTER TABLE public.venta
ALTER COLUMN folio TYPE numeric(12, 0);
ALTER TABLE public.venta
ADD CONSTRAINT venta_pkey PRIMARY KEY (folio);

ALTER TABLE public.mantenimiento
ADD CONSTRAINT fk_venta FOREIGN KEY (venta_folio)
    REFERENCES public.venta (folio) 
    ON UPDATE NO ACTION
    ON DELETE CASCADE;



select *from vehiculo;
SELECT * FROM public.vehiculo WHERE idvehiculo = 4;
CREATE SEQUENCE vehiculo_id_seq;
ALTER TABLE public.vehiculo
    ALTER COLUMN idvehiculo SET DEFAULT nextval('vehiculo_id_seq');
SELECT MAX(idvehiculo) FROM public.vehiculo;
SELECT setval('vehiculo_id_seq', 3);  -- Cambia 3 por el valor máximo que obtuviste
SELECT idvehiculo FROM public.vehiculo ORDER BY idvehiculo;
SELECT MAX(idvehiculo) FROM public.vehiculo;
SELECT * FROM pg_sequences;
SELECT nextval('vehiculo_id_seq');
ALTER SEQUENCE vehiculo_id_seq RESTART WITH 4;

SELECT * FROM public.marca;
SELECT MAX(idmarca) FROM public.marca;
SELECT COALESCE(MAX(idmarca), 0) + 1 AS next_idmarca
FROM public.marca;
-- -----------------
DO $$
DECLARE
    next_idmarca integer;
BEGIN
    -- Obtener el próximo idmarca
    SELECT COALESCE(MAX(idmarca), 0) + 1 INTO next_idmarca FROM public.marca;

    -- Crear la secuencia utilizando el próximo idmarca
    EXECUTE format('CREATE SEQUENCE marca_id_seq START WITH %s INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;', next_idmarca);
    
    -- Establecer la secuencia como valor por defecto para la columna idmarca
    EXECUTE 'ALTER TABLE public.marca ALTER COLUMN idmarca SET DEFAULT nextval(''marca_id_seq'')';
END $$;
-- ------------------------
SELECT last_value FROM marca_id_seq;
SELECT COALESCE(MAX(idmarca), 0) FROM public.marca;
TRUNCATE TABLE public.marca CASCADE;
-- SELECT nextval('marca_id_seq');
SELECT setval('marca_id_seq', 1, false);
SELECT COALESCE(MAX(idmarca), 0) + 1 AS next_idmarca
FROM public.marca;
INSERT INTO public.marca (nombre)
VALUES 
    ('Toyota'),
    ('Honda'),
    ('Ford'),
    ('Chevrolet'),
    ('Nissan'),
    ('Mazda'),
    ('Subaru'),
    ('Hyundai'),
    ('Kia');

select * from vehiculo;
SELECT * FROM pg_sequences;
SELECT MAX(idvehiculo) FROM public.vehiculo;
SELECT last_value FROM marca_id_seq;
SELECT setval('vehiculo_id_seq', 1, false);
-- truncate vehiculo cascade;

select *from vehiculo;
INSERT INTO Vehiculo (Patente, Marca, Modelo, Color, Precio, FrecuenciaMantenimiento, Marca_IDMarca, TipoVehiculo_IDTipoVehiculo)
VALUES
    ('ABC123', 'Marca1', 'Modelo1', 'Rojo', 1000000, 6, 1, 1),  -- ID 1
    ('DEF456', 'Marca2', 'Modelo2', 'Verde', 1200000, 12, 2, 2),  -- ID 2
    ('GHI789', 'Marca3', 'Modelo3', 'Azul', 800000, 6, 3, 1),   -- ID 3
    ('JKL012', 'Marca4', 'Modelo4', 'Negro', 2000000, 12, 4, 2),  -- ID 4
    ('MNO345', 'Marca5', 'Modelo5', 'Blanco', 1500000, 6, 5, 1),  -- ID 5
    ('PQR678', 'Marca6', 'Modelo6', 'Gris', 2500000, 12, 6, 2),  -- ID 6
    ('STU901', 'Marca7', 'Modelo7', 'Rojo', 3000000, 6, 7, 1),   -- ID 7
    ('VWX234', 'Marca8', 'Modelo8', 'Verde', 4000000, 12, 8, 2),  -- ID 8
    ('YZA567', 'Marca9', 'Modelo9', 'Azul', 5000000, 6, 9, 1);   -- ID 9


-- Insertar datos de ejemplo en la tabla Venta sin incluir la columna Folio
select * from venta;
SELECT MAX(folio) FROM public.venta;
SELECT last_value FROM venta_folio_new_seq;
SELECT setval('venta_folio_new_seq', 1, false);
INSERT INTO Venta (Fecha, Monto, Vehiculo_IDVehiculo, Cliente_RUT)
VALUES 
    ('2024-01-15', 500000, 1, '12345678'),  -- Juan Pérez (Standard)
    ('2024-02-10', 600000, 2, '12345678'),  -- Juan Pérez (Standard)
    ('2024-03-05', 200000, 3, '12345678'),  -- Juan Pérez (Standard)
    ('2024-01-20', 1500000, 4, '87654321'), -- Ana Gómez (Gold)
    ('2024-04-15', 2000000, 5, '87654321'), -- Ana Gómez (Gold)
    ('2024-05-01', 500000, 6, '87654321'),  -- Ana Gómez (Gold)
    ('2024-06-10', 3500000, 7, '11223344'), -- Luis Rodríguez (Premium)
    ('2024-07-22', 3000000, 8, '11223344'), -- Luis Rodríguez (Premium)
    ('2024-08-30', 4000000, 9, '99887766'); -- María López (Premium)

-- Asumiendo que los vehículos con ID 1, 2 y 3 existen en la tabla vehiculo

INSERT INTO Venta (Fecha, Monto, Vehiculo_IDVehiculo, Cliente_RUT)
VALUES 
    ('2024-08-01', 300000, 1, '11111111-1'),  -- Venta para Carlos Pérez
    ('2024-08-05', 450000, 2, '22222222-2'),  -- Venta para Nuevo Nombre
    ('2024-08-10', 550000, 3, '33333333-3');  -- Venta para Juan Pérez

select * from cliente;

-- Insertar datos de ejemplo en la tabla Cliente
INSERT INTO Cliente (RUT, Nombre, Correo, Direccion, Celular, Alta)
VALUES 
    ('12345678', 'Juan Pérez', 'juan@example.com', 'Calle Falsa 123', '123456789', 'S'),
    ('87654321', 'Ana Gómez', 'ana@example.com', 'Avenida Siempre Viva 742', '987654321', 'S'),
    ('11223344', 'Luis Rodríguez', 'luis@example.com', 'Paseo de la Reforma 456', '456789123', 'S'),
    ('99887766', 'María López', 'maria@example.com', 'Plaza Mayor 789', '321654987', 'S');

-- con join--------------------------------
SELECT 
    C.RUT, 
    C.Nombre,
    COALESCE(TotalVentas, 0) AS TotalVentas,
    CASE 
		WHEN COALESCE(TotalVentas, 0) = 0 THEN 'Sin ventas'
        WHEN COALESCE(TotalVentas, 0) BETWEEN 0 AND 1000000 THEN 'Standard'
        WHEN COALESCE(TotalVentas, 0) BETWEEN 1000001 AND 3000000 THEN 'Gold'
        WHEN COALESCE(TotalVentas, 0) > 3000000 THEN 'Premium'
        ELSE 'Sin ventas'
    END AS Clasificacion
FROM 
    Cliente C
LEFT JOIN (
    SELECT 
        Cliente_RUT, 
        SUM(Monto) AS TotalVentas
    FROM 
        Venta 
    WHERE 
        EXTRACT(YEAR FROM Fecha) = EXTRACT(YEAR FROM CURRENT_DATE)  -- Ventas del año actual
    GROUP BY 
        Cliente_RUT
) V ON C.RUT = V.Cliente_RUT;

-- con subconsulta ---------------------
WITH VentasAnuales AS (
    SELECT 
        Cliente_RUT, 
        SUM(Monto) AS TotalVentas
    FROM 
        Venta
    WHERE 
        EXTRACT(YEAR FROM Fecha) = EXTRACT(YEAR FROM CURRENT_DATE)  -- Filtrar ventas del año actual
    GROUP BY 
        Cliente_RUT
)
SELECT 
    C.RUT, 
    C.Nombre,
    COALESCE(V.TotalVentas, 0) AS TotalVentas,
    CASE 
        WHEN COALESCE(V.TotalVentas, 0) = 0 THEN 'Sin ventas'
        WHEN COALESCE(V.TotalVentas, 0) <= 1000000 THEN 'Standard'
        WHEN COALESCE(V.TotalVentas, 0) <= 3000000 THEN 'Gold'
        ELSE 'Premium'
    END AS Clasificacion
FROM 
    Cliente C
LEFT JOIN 
    VentasAnuales V ON C.RUT = V.Cliente_RUT;


SELECT * FROM Venta;



-- --------------------------------------------------------
-- 4. Por medio de una subconsulta, listar las ventas con la marca del vehículo más vendido.

SELECT 
    vh.idvehiculo,
    vh.marca,
    vh.modelo,
    SUM(v.monto) AS total_ventas
FROM 
    Venta v
JOIN 
    Vehiculo vh ON v.Vehiculo_IDVehiculo = vh.idvehiculo
GROUP BY 
    vh.idvehiculo, vh.marca, vh.modelo
ORDER BY 
    total_ventas DESC
LIMIT 2;  -- Cambia el número para obtener más o menos vehículos

-- -------------------
-- tabla total ventas agrupadas por vehiculo
WITH TotalVentas AS (
    SELECT 
        vh.idvehiculo,
        vh.marca,
        vh.modelo,
        SUM(v.monto) AS total_ventas
    FROM 
        Vehiculo vh
    JOIN 
        Venta v ON v.Vehiculo_IDVehiculo = vh.idvehiculo
    GROUP BY 
        vh.idvehiculo, vh.marca, vh.modelo
),
-- tabla ventas máximas de la tabla creada
MaxVentas AS (
    SELECT 
        MAX(total_ventas) AS max_ventas,
        MAX(CASE WHEN total_ventas < (SELECT MAX(total_ventas) FROM TotalVentas) THEN total_ventas END) AS second_max_ventas
    FROM 
        TotalVentas
)
SELECT 
    tv.idvehiculo,
    tv.marca,
    tv.modelo,
    tv.total_ventas
FROM 
    TotalVentas tv
JOIN -- interseccion entre las 2 tablas creadas
    MaxVentas mv ON tv.total_ventas = mv.max_ventas OR tv.total_ventas = mv.second_max_ventas;

SELECT 
  column_name, 
  data_type, 
  character_maximum_length, 
  is_nullable, 
  column_default 
FROM 
  information_schema.columns 
WHERE 
  table_name = 'venta';  -- Cambia 'film' a 'venta'

SELECT 
    column_name, table_name,
    data_type, 
    character_maximum_length, 
    is_nullable, 
    column_default 
FROM 
    information_schema.columns 
WHERE 
    table_name = 'vehiculo' 
    AND 
	table_catalog = 'empresa_vehiculos';  -- Asegúrate de que el nombre de la base de datos sea correcto
