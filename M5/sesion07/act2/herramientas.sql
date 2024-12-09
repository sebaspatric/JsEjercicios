SELECT 
    table_name,
    column_name, 
    data_type, 
    character_maximum_length, 
    is_nullable, 
    column_default 
FROM 
    information_schema.columns 
WHERE 
    table_catalog = 'arriendoherramientas'  -- Asegúrate de que el nombre de la base de datos sea correcto
    AND table_schema = 'public'
	order by table_name;             -- Filtrar solo las tablas en el esquema público



-- 1. Listar los clientes sin arriendos por medio de una subconsulta.
select * from cliente;

INSERT INTO Cliente (RUT, Nombre, Correo, Direccion, Celular, Empresa_RUT) 
VALUES 
    ('66666666', 'Fernando Gómez', 'fernando@example.com', 'Calle Real 101', '654321987', '12345678-9'),
    ('77777777', 'María Fernández', 'maria@example.com', 'Av. Libertador 203', '765432198', '12345678-9'),
    ('88888888', 'Carlos López', 'carlos@example.com', 'Paseo del Parque 405', '876543210', '12345678-9'),
    ('99999999', 'Laura Martínez', 'laura@example.com', 'Plaza Central 306', '987654321', '12345678-9');

select * from arriendo;
SELECT *
FROM Cliente
WHERE RUT NOT IN (
    SELECT Cliente_RUT
    FROM Arriendo
);

-- -----------------------------------------------------------------------------------
-- 2. Listar todos los arriendos con las siguientes columnas: Folio, Fecha, Dias, ValorDia, NombreCliente, RutCliente.

SELECT 
    a.Folio,
    a.Fecha,
    a.Dias,
    a.ValorDia,
    c.Nombre AS NombreCliente,
    c.RUT AS RutCliente
FROM 
    Arriendo a
JOIN 
    Cliente c ON a.Cliente_RUT = c.RUT;
-- -------------
-- con subconsulta
SELECT 
    a.Folio,
    a.Fecha,
    a.Dias,
    a.ValorDia,
    (SELECT c.Nombre 
     FROM Cliente c 
     WHERE c.RUT = a.Cliente_RUT) AS NombreCliente,
    a.Cliente_RUT AS RutCliente
FROM 
    Arriendo a;
-- ------------------------------------------------------------------
-- 3. Clasificar los clientes según la siguiente tabla:

-- Cantidad de arriendos mensuales entre	Clasificación
-- 0 1	Baio
-- 1 3	Medio
-- 30 más	Alto



SELECT 
    c.RUT, 
    c.Nombre,
    COUNT(a.Folio) AS CantidadArriendos,
    CASE 
        WHEN COUNT(a.Folio) = 0 THEN 'Bajo'
        WHEN COUNT(a.Folio) BETWEEN 1 AND 3 THEN 'Medio'
        WHEN COUNT(a.Folio) >= 3 THEN 'Alto'
        ELSE 'Sin Clasificación' -- Para cualquier otro caso, aunque no debería ser necesario.
    END AS Clasificacion
FROM 
    Cliente c
LEFT JOIN 
    Arriendo a ON c.RUT = a.Cliente_RUT
GROUP BY 
    c.RUT, c.Nombre
ORDER BY 
    CantidadArriendos;
-- --------------

SELECT 
        c.RUT, 
        c.Nombre,
        COUNT(a.Folio) AS CantidadArriendos
    FROM 
        Cliente c
    LEFT JOIN 
        Arriendo a ON c.RUT = a.Cliente_RUT
    GROUP BY 
        c.RUT, c.Nombre;
		
 -- con with ----------------
WITH ArriendosPorCliente AS (
    SELECT 
        c.RUT, 
        c.Nombre,
        COUNT(a.Folio) AS CantidadArriendos
    FROM 
        Cliente c
    LEFT JOIN 
        Arriendo a ON c.RUT = a.Cliente_RUT
    GROUP BY 
        c.RUT, c.Nombre
)
SELECT 
    RUT,
    Nombre,
    CantidadArriendos,
    CASE 
        WHEN CantidadArriendos = 0 THEN 'Bajo'
        WHEN CantidadArriendos BETWEEN 1 AND 3 THEN 'Medio'
        WHEN CantidadArriendos >= 3 THEN 'Alto'
        ELSE 'Sin Clasificación'  -- Este caso no debería aparecer si se hace correctamente
    END AS Clasificacion
FROM 
    ArriendosPorCliente
ORDER BY 
    CantidadArriendos;


-- --------------------------------------------------------------------
-- 4. Por medio de una subconsulta, listar los clientes con el nombre de la herramienta más arrendada.

SELECT 
    c.RUT, 
    c.Nombre AS NombreCliente,
    h.Nombre AS HerramientaMasArrendada
FROM 
    Cliente c
JOIN 
    Arriendo a ON c.RUT = a.Cliente_RUT
JOIN 
    Herramienta h ON a.Herramienta_IDHerramienta = h.IDHerramienta
WHERE 
    h.IDHerramienta = (
        SELECT 
            a.Herramienta_IDHerramienta
        FROM 
            Arriendo a
        GROUP BY 
            a.Herramienta_IDHerramienta
        ORDER BY 
            COUNT(*) DESC
         LIMIT 1
    );
	-- --------------
SELECT 
    c.RUT, 
    c.Nombre AS NombreCliente, 
    h.Nombre AS HerramientaMasArrendada, 
    COUNT(a.Folio) AS TotalArriendos
FROM 
    Cliente c
JOIN 
    Arriendo a ON c.RUT = a.Cliente_RUT
JOIN 
    Herramienta h ON a.Herramienta_IDHerramienta = h.IDHerramienta
GROUP BY 
    c.RUT, c.Nombre, h.Nombre
HAVING 
    COUNT(a.Folio) > 0
ORDER BY 
    TotalArriendos DESC
	limit 2;
-- -----
SELECT 
    c.RUT, 
    c.Nombre AS NombreCliente, 
    h.Nombre AS HerramientaMasArrendada, 
    COUNT(a.Folio) AS TotalArriendos
FROM 
    Cliente c
JOIN 
    Arriendo a ON c.RUT = a.Cliente_RUT
JOIN 
    Herramienta h ON a.Herramienta_IDHerramienta = h.IDHerramienta
WHERE 
     h.IDHerramienta in (
         SELECT 
             a.Herramienta_IDHerramienta
         FROM 
             Arriendo a
         GROUP BY 
             a.Herramienta_IDHerramienta
         ORDER BY 
             COUNT(*) DESC
         LIMIT 3
     )
GROUP BY 
    c.RUT, c.Nombre, h.Nombre
HAVING 
    COUNT(a.Folio) > 0
ORDER BY 
    TotalArriendos DESC
	;
-- -------------------------
select * from herramienta;

-- ----------------------------
SELECT 
    c.RUT, 
    c.Nombre AS NombreCliente, 
    ar.HerramientaMasArrendada, 
    ar.TotalArriendos
FROM 
    Cliente c
JOIN (
    SELECT 
        a.Cliente_RUT, 
        a.Herramienta_IDHerramienta, 
        MAX(h.Nombre) AS HerramientaMasArrendada, 
        COUNT(a.Folio) AS TotalArriendos,
        ROW_NUMBER() OVER (PARTITION BY a.Cliente_RUT ORDER BY COUNT(a.Folio) DESC) AS ranking
    FROM 
        Arriendo a
    JOIN 
        Herramienta h ON a.Herramienta_IDHerramienta = h.IDHerramienta
    GROUP BY 
        a.Cliente_RUT, a.Herramienta_IDHerramienta
) ar ON c.RUT = ar.Cliente_RUT
WHERE 
    ar.ranking <= 3
ORDER BY 
    ar.TotalArriendos DESC
LIMIT 2;

