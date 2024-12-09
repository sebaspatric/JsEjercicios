-- Crear la base de datos 'peliculas'
CREATE DATABASE peliculas;
-- Conectar a la base de datos 'peliculas'
'''
\c peliculas
'''

-- Eliminar tablas si existen
DROP TABLE IF EXISTS reparto;
DROP TABLE IF EXISTS peliculas;

-- Crear la tabla peliculas con ID como columna regular
CREATE TABLE peliculas (
    id INT PRIMARY KEY,
    pelicula VARCHAR(255),
    estreno INT,
    director VARCHAR(255)
);

-- Crear la tabla reparto, haciendo referencia a peliculas
CREATE TABLE reparto (
    id_pelicula INT REFERENCES peliculas(id),
    actor VARCHAR(255)
);


'''

-- Cargar datos desde el archivo peliculas.csv a la tabla peliculas
\COPY peliculas(pelicula, estreno, director) FROM 'E:\TalentoDigital\Javascript\M5\sesion05\ejercicio2\ApoyoCSV\peliculas.csv' WITH CSV;

-- Cargar datos desde el archivo reparto.csv a la tabla reparto
\COPY reparto(id_pelicula, actor) FROM 'E:\TalentoDigital\Javascript\M5\sesion05\ejercicio2\ApoyoCSV\reparto.csv' WITH CSV;

'''

select * from peliculas;
select * from reparto;

-- Seleccionar el título de la película, año de estreno, director y el reparto de la película "Titanic"
SELECT 
    p.pelicula AS "Título de la Película",  -- Título de la película
    p.estreno AS "Año de Estreno",          -- Año de estreno
    p.director AS "Director",                -- Nombre del director
    r.actor AS "Reparto"                     -- Nombre del actor en el reparto
FROM 
    peliculas p                             -- Tabla de películas
JOIN 
    reparto r ON p.id = r.id_pelicula     -- Unir con la tabla de reparto mediante el id de la película
WHERE 
    p.pelicula = 'Titanic';                -- Filtrar solo para la película "Titanic"

-- ------------------------------------------------------
-- Contar cuántas películas tiene cada director y listar los 10 más populares
SELECT 
    p.director AS "Nombre del Director",    -- Nombre del director
    COUNT(p.id) AS "Número de Películas"    -- Contar el número de películas del director
FROM 
    peliculas p                             -- Tabla de películas
GROUP BY 
    p.director                              -- Agrupar por director
ORDER BY 
    COUNT(p.id) DESC                        -- Ordenar en orden descendente por el número de películas
LIMIT 10;                                  -- Limitar a los 10 resultados

-- ---------------------------------------------
-- Contar el número de actores únicos en la tabla de reparto
SELECT 
    COUNT(DISTINCT r.actor) AS "Número de Actores Distintos" -- Contar actores distintos
FROM 
    reparto r;                             -- Tabla de reparto
-- ----------------------------------------------------------------
-- Listar películas estrenadas entre 1990 y 1999, ordenadas por título
SELECT 
    p.pelicula AS "Título de la Película",  -- Título de la película
    p.estreno AS "Año de Estreno"            -- Año de estreno
FROM 
    peliculas p                             -- Tabla de películas
WHERE 
    p.estreno BETWEEN 1990 AND 1999         -- Filtrar por años de estreno
ORDER BY 
    p.pelicula ASC;                         -- Ordenar por título de forma ascendente
-- ---------------------------------------------------------------
-- Obtener el reparto de la película más reciente
SELECT 
    r.actor AS "Reparto", p.pelicula, p.estreno                     -- Nombre del actor en el reparto
FROM 
    reparto r                               -- Tabla de reparto
JOIN 
    peliculas p ON r.id_pelicula = p.id    -- Unir con la tabla de películas
WHERE 
    p.estreno = (SELECT MAX(estreno) FROM peliculas); -- Filtrar por la película más nueva
	
-- ---------------------------------------------------------
-- Seleccionar la película con el año de estreno más reciente utilizando MAX
SELECT 
    pelicula, 
    estreno 
FROM 
    peliculas 
WHERE 
    estreno = (SELECT MAX(estreno) FROM peliculas);


-- ------------------------------------------------------
BEGIN; -- Inicia la transacción
SAVEPOINT memoria; -- Guarda un punto de referencia
-- Inserta una nueva película solo en memoria
INSERT INTO peliculas (id, pelicula, estreno, director) 
VALUES (1001, 'Nueva Película en Memoria', 2023, 'Director Ejemplo'); -- Asigna un id manualmente
ROLLBACK TO memoria; -- Descomenta esto si deseas revertir solo la película en memoria
-- Inserta otra película que se guardará en disco duro
INSERT INTO peliculas (id, pelicula, estreno, director) 
VALUES (
    (SELECT COALESCE(MAX(id), 0) + 1 FROM peliculas), 
    'Película en Disco Duro', 
    2024, 
    'Director Ejemplo 2'
);

COMMIT; -- Esto confirmará ambos cambios si no se realiza el ROLLBACK

select * from peliculas;

------------------------
-- 13. Actualice 5 directores utilizando ROLLBACK
-- Inicia la transacción, lo que permite agrupar las operaciones SQL
BEGIN; 

-- Actualiza el director de la película con id = 1
UPDATE peliculas 
SET director = 'Nuevo Director 1' 
WHERE id = 1; -- Cambia el director de la película con ID 1

-- Actualiza el director de la película con id = 2
UPDATE peliculas 
SET director = 'Nuevo Director 2' 
WHERE id = 2; -- Cambia el director de la película con ID 2

-- Actualiza el director de la película con id = 3
UPDATE peliculas 
SET director = 'Nuevo Director 3' 
WHERE id = 3; -- Cambia el director de la película con ID 3

-- Actualiza el director de la película con id = 4
UPDATE peliculas 
SET director = 'Nuevo Director 4' 
WHERE id = 4; -- Cambia el director de la película con ID 4

-- Actualiza el director de la película con id = 5
UPDATE peliculas 
SET director = 'Nuevo Director 5' 
WHERE id = 5; -- Cambia el director de la película con ID 5

-- Revierte todos los cambios realizados en la transacción, 
-- por lo que los directores no serán actualizados en la base de datos
ROLLBACK; 


-- -----------------------------------
-- 14. Inserte 3 actores a la película “Rambo” utilizando SAVEPOINT

-- Inicia la transacción para agrupar las operaciones SQL
BEGIN; 

-- Define un SAVEPOINT para poder revertir cambios específicos más tarde
SAVEPOINT antes_de_inserciones;

-- Inserta el primer actor en la película "Rambo"
INSERT INTO reparto (id_pelicula, actor) 
SELECT id, 'Actor 1' 
FROM peliculas 
WHERE pelicula = 'Rambo';  -- Busca el id de la película "Rambo"


-- Inserta el segundo actor en la película "Rambo"
INSERT INTO reparto (id_pelicula, actor) 
VALUES ((SELECT id FROM peliculas WHERE pelicula = 'Rambo'), 'Actor 2');

-- Inserta el tercer actor en la película "Rambo"
INSERT INTO reparto (id_pelicula, actor) 
VALUES ((SELECT id FROM peliculas WHERE pelicula = 'Rambo'), 'Actor 3');

-- Si se desea revertir las inserciones, se puede hacer un ROLLBACK TO el SAVEPOINT
ROLLBACK TO antes_de_inserciones; -- Descomentar para revertir cambios

-- Si se desean conservar las inserciones, se puede confirmar la transacción
COMMIT; 


SELECT * FROM reparto
WHERE id_pelicula = 72;


SELECT id FROM peliculas WHERE pelicula = 'Rambo';

-- -------------------------------
-- 15. Elimina las películas estrenadas el año 2008 solo en memoria.

select * from peliculas
where estreno =2008;

SELECT COUNT(*) AS total_peliculas
FROM peliculas
WHERE estreno = 2008;

BEGIN; -- Inicia la transacción

-- 1. Eliminar el reparto asociado a las películas estrenadas en el año 2008
DELETE FROM reparto 
WHERE id_pelicula IN (SELECT id FROM peliculas WHERE estreno = 2008);

-- 2. Eliminar las películas estrenadas en el año 2008
DELETE FROM peliculas 
WHERE estreno = 2008;

-- 3. Verifica que se hayan eliminado los registros (opcional)
-- Muestra los registros de reparto y películas que fueron eliminados
SELECT * FROM reparto WHERE id_pelicula NOT IN (SELECT id FROM peliculas);
SELECT * FROM peliculas WHERE estreno = 2008;

ROLLBACK; -- Revierte todos los cambios, no se eliminará nada en la base de datos

-- --------------------------------------------
-- 16. Inserta 2 actores para cada película estrenada en el 2001
-- Selecciona todas las películas estrenadas en 2001
-- Selecciona los actores de las películas estrenadas en 2001
SELECT r.actor, p.pelicula, p.estreno
FROM reparto r
JOIN peliculas p ON r.id_pelicula = p.id
WHERE p.estreno = 2001;

BEGIN; -- Inicia la transacción

-- 16. Inserta 2 actores para cada película estrenada en el 2001
INSERT INTO reparto (id_pelicula, actor)
SELECT 
    p.id, 
    'Actor ' || p.id || ' - 1' AS actor
FROM 
    peliculas p
WHERE 
    p.estreno = 2001;

INSERT INTO reparto (id_pelicula, actor)
SELECT 
    p.id, 
    'Actor ' || p.id || ' - 2' AS actor
FROM 
    peliculas p
WHERE 
    p.estreno = 2001;

rollback; -- Confirma la transacción, guardando los nuevos actores en la base de datos


-- --------------------
BEGIN; -- Inicia la transacción

-- 1. Inserta 2 actores para cada película estrenada en el 2001
-- Suponiendo que la tabla 'reparto' tiene los campos 'id_pelicula' y 'actor'.
INSERT INTO reparto (id_pelicula, actor)
SELECT p.id, 'Actor ' || i.n AS actor -- 'Actor 1' y 'Actor 2'
FROM peliculas p
CROSS JOIN (
    SELECT 1 AS n UNION ALL SELECT 2 AS n
) i
WHERE p.estreno = 2001; -- Filtra solo las películas del año 2001

rollback; -- Confirma la transacción, guardando los nuevos actores en la base de datos

-- -------------------------
-- 17. Actualice la película “King Kong” por el nombre de “Donkey Kong”, sin efectuar cambios en disco duro.
select * from peliculas;

BEGIN; -- Inicia la transacción

-- 1. Actualiza el nombre de la película "King Kong" a "Donkey Kong" en memoria
UPDATE peliculas 
SET pelicula = 'Donkey Kong' 
WHERE pelicula = 'King Kong'; 

-- La película se actualiza en memoria, pero no se ha confirmado la transacción aún.

ROLLBACK; -- Revierte la transacción, por lo que no se realizarán cambios en el disco duro


