-- CREATE DATABASE dvdrental;

-- $ pg_restore -U postgres -d dvdrental "E:\TalentoDigital\Javascript\M5\practicaCONSOLIDACION\dvdrental\dvdrental.tar"
-- Contraseña:

/*
SMA@Asus MINGW64 ~
$ psql -U postgres
Contraseña para usuario postgres:
psql (17.0)
ADVERTENCIA: El código de página de la consola (850) difiere del código
            de página de Windows (1252).
            Los caracteres de 8 bits pueden funcionar incorrectamente.
            Vea la página de referencia de psql «Notes for Windows users»
            para obtener más detalles.
Digite «help» para obtener ayuda.

postgres=# \c dvdrental
Ahora está conectado a la base de datos «dvdrental» con el usuario «postgres».
dvdrental=# \dt
           Listado de relaciones
 Esquema |    Nombre     | Tipo  |  Due±o
---------+---------------+-------+----------
 public  | actor         | tabla | postgres
 public  | address       | tabla | postgres
 public  | category      | tabla | postgres
 public  | city          | tabla | postgres
 public  | country       | tabla | postgres
 public  | customer      | tabla | postgres
 public  | film          | tabla | postgres
 public  | film_actor    | tabla | postgres
 public  | film_category | tabla | postgres
 public  | inventory     | tabla | postgres
 public  | language      | tabla | postgres
 public  | payment       | tabla | postgres
 public  | rental        | tabla | postgres
 public  | staff         | tabla | postgres
 public  | store         | tabla | postgres

*/
-- https://www.postgresqltutorial.com/postgresql-getting-started/load-postgresql-sample-database/


-- 4. Construye las siguientes consultas:
-- • Aquellas usadas para insertar, modificar y eliminar un Customer, Staff y Actor.
select * from customer order by customer_id desc;
-- Inserta un nuevo cliente en la tabla Customer
-- No es necesario especificar customer_id, ya que se generará automáticamente
INSERT INTO public.customer (store_id, first_name, last_name, email, address_id, activebool)
VALUES 
    (1, 'Daniel', 'Taylor', 'daniel.taylor@example.com', 1, TRUE);
	
-- Modifica el nombre y el correo electrónico de un cliente específico
UPDATE public.customer
SET last_name = 'James', email = 'daniel.james@example.com'
WHERE customer_id = 600; -- Cambia el customer_id según sea necesario

-- Elimina un cliente específico de la tabla Customer
DELETE FROM public.customer
WHERE customer_id = 600; -- Elimina el cliente con ID 11

select * from staff;
-- Inserta un nuevo empleado en la tabla Staff
INSERT INTO public.staff (first_name, last_name, address_id, email, store_id, username, password, picture)
VALUES ('Juan', 'Pérez', 1, 'juan.perez@example.com', 1, 'juanp', 'hashedpassword123', NULL);

-- Modificar el primer nombre, apellido y correo de un staff específico
UPDATE public.staff
SET first_name = 'Carlos',              -- Cambia el primer nombre
    last_name = 'Gómez',                -- Cambia el apellido
    email = 'carlos.gomez@example.com'  -- Cambia el correo
WHERE staff_id = 3;                     -- Cambia '1' por el ID del staff que deseas actualizar

-- Eliminar un registro específico de la tabla Staff
DELETE FROM public.staff
WHERE staff_id = 3;                     -- Cambia '1' por el ID del staff que deseas eliminar

-- • Listar todas las “rental” con los datos del “customer” dado un año y mes.
-- Listar todas las rentals junto con los datos del customer para un año y mes específicos
select * from rental
order by rental_date desc;
SELECT 
    r.rental_id,            -- ID del arriendo
    r.rental_date,          -- Fecha del arriendo
    c.customer_id,          -- ID del cliente
    c.first_name,           -- Primer nombre del cliente
    c.last_name,            -- Apellido del cliente
    c.email,                -- Correo del cliente
    c.address_id,           -- ID de la dirección del cliente
    c.activebool            -- Estado del cliente (activo/inactivo)
FROM 
    public.rental r
JOIN 
    public.customer c ON r.customer_id = c.customer_id
WHERE 
    EXTRACT(YEAR FROM r.rental_date) = 2005  -- Cambia 2005 por el año deseado
    AND EXTRACT(MONTH FROM r.rental_date) = 8; -- Cambia 10 por el mes deseado (ejemplo: octubre)


-- • Listar Número, Fecha (payment_date) y Total (amount) de todas las “payment”.
select * from payment
limit 10;
-- Listar el número, la fecha y el total de todos los payments
SELECT 
    payment_id,           -- ID del pago
    payment_date,         -- Fecha del pago
    amount                 -- Total del pago
FROM 
    payment;       -- Nombre de la tabla de pagos

-- • Listar todas las “film” del año 2006 que contengan un (rental_rate) mayor a 4.0.

select * from film
where rental_rate > 4
limit 10;

-- Listar todas las películas del año 2006 con un rental_rate mayor a 4.0
SELECT 
    film_id,               -- ID de la película
    title,                 -- Título de la película
    rental_rate,           -- Tasa de alquiler
    release_year           -- Año de lanzamiento
FROM 
    public.film           -- Nombre de la tabla de películas
WHERE 
    release_year = 2006   -- Filtrar por el año 2006
    AND rental_rate > 4.0; -- Filtrar por rental_rate mayor a 4.0
	
-- Contar el número de películas del año 2006 con un rental_rate mayor a 4.0
SELECT 
    COUNT(*) AS total_peliculas  -- Cuenta el número total de películas que cumplen con los criterios
FROM 
    public.film                  -- Nombre de la tabla de películas
WHERE 
    release_year = 2006          -- Filtrar por el año 2006
    AND rental_rate > 4.0;       -- Filtrar por rental_rate mayor a 4.0


-- 5. Realiza un Diccionario de datos que contenga el nombre de las tablas y columnas, si
-- éstas pueden ser nulas, y su tipo de dato correspondiente
-- 

SELECT 
    table_name AS "Tabla", 
    column_name AS "Columna", 
    is_nullable AS "Puede ser Nulo", 
    data_type AS "Tipo de Dato"
FROM 
    information_schema.columns 
WHERE 
    table_schema = 'public'  -- Cambia 'public' si tus tablas están en otro esquema
ORDER BY 
    table_name, 
    ordinal_position;
