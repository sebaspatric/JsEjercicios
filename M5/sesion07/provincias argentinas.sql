CREATE TABLE provincias (
	id INTEGER NOT NULL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL
);

copy provincias from 'E:\TalentoDigital\Javascript\M5\sesion07\OneDrive_1_16-10-2024\provincias_argentina\provincias.csv' delimiter ',' header;

CREATE TABLE departamentos (
	id INTEGER NOT NULL PRIMARY KEY,
	provincia_id INTEGER NOT NULL,
	nombre  VARCHAR(100) NOT NULL
);

copy departamentos from 'E:\TalentoDigital\Javascript\M5\sesion07\OneDrive_1_16-10-2024\provincias_argentina\departamentos.csv' delimiter ',' header;


CREATE TABLE localidades (
	id INTEGER NOT NULL PRIMARY KEY,
	departamento_id INTEGER NOT NULL,
	nombre  VARCHAR(100) NOT NULL
);
COPY localidades FROM 'E:\TalentoDigital\Javascript\M5\sesion07\OneDrive_1_16-10-2024\provincias_argentina\localidades.csv' DELIMITER ',' CSV HEADER;

select p.id, p.nombre as provincia,
		d.id, d.nombre as departamento,
		l.id, l.nombre as localidad
	FROM provincias as p, departamentos as d, localidades as l
	where p.id = d.provincia_id and
		d.id = l.departamento_id;


-- generar una consulta donde se pueda observar: nombre de la provincia, cantiidad de departamentos,
-- cantidad de localidades

select p.nombre,
		(select count(*) from departamentos as d 
		where p.id = d.provincia_id) as cantidad_departamentos,
		(select count(*) from localidades as l, departamentos as d
		where l.departamento_id = d.id and d.provincia_id = p.id) as cantidad_localidades
		from provincias as p;
SELECT 
    p.nombre,
    COUNT(DISTINCT d.id) AS cantidad_departamentos,
    COUNT(l.id) AS cantidad_localidades
FROM 
    provincias p
LEFT JOIN departamentos d ON p.id = d.provincia_id
LEFT JOIN localidades l ON d.id = l.departamento_id
GROUP BY p.id, p.nombre;
