-- 1. Crear la base de datos 'libreria' si no existe
CREATE DATABASE libreria;

-- Conectarse a la base de datos 'libreria'
-- \c libreria;

-- 1. Iniciar una transacción
BEGIN;

-- 2. Crear tabla “editoriales”, con los atributos código y nombre.
-- Definir el código como llave primaria.
CREATE TABLE IF NOT EXISTS editoriales (
    codigo SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- 3. Crear tabla “libros”, con los atributos código, título, y codigoeditorial.
-- Definir el código como llave primaria, y codigoeditorial como llave foránea.
CREATE TABLE IF NOT EXISTS libros (
    codigo SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    codigoeditorial INTEGER NOT NULL,
    FOREIGN KEY (codigoeditorial) REFERENCES editoriales(codigo)
);

-- 4. Insertar editoriales
INSERT INTO editoriales (nombre) VALUES 
    ('Anaya'),
    ('Andina'),
    ('S.M.');

-- 5. Insertar libros
INSERT INTO libros (titulo, codigoeditorial) VALUES 
    ('Don Quijote de La Mancha I', (SELECT codigo FROM editoriales WHERE nombre = 'Anaya')),
    ('El principito', (SELECT codigo FROM editoriales WHERE nombre = 'Andina')),
    ('El príncipe', (SELECT codigo FROM editoriales WHERE nombre = 'S.M.')),
    ('Diplomacia', (SELECT codigo FROM editoriales WHERE nombre = 'S.M.')),
    ('Don Quijote de La Mancha II', (SELECT codigo FROM editoriales WHERE nombre = 'Anaya'));

-- 6. Modificar la tabla “libros”, agregando la columna autor y precio.
ALTER TABLE libros
ADD COLUMN autor VARCHAR(100),
ADD COLUMN precio NUMERIC(10, 2);

-- 7. Agregar autor y precio a los libros ya ingresados.
UPDATE libros SET autor = 'Miguel de Cervantes', precio = 150 WHERE titulo = 'Don Quijote de La Mancha I';
UPDATE libros SET autor = 'Antoine SaintExupery', precio = 120 WHERE titulo = 'El principito';
UPDATE libros SET autor = 'Maquiavelo', precio = 180 WHERE titulo = 'El príncipe';
UPDATE libros SET autor = 'Henry Kissinger', precio = 170 WHERE titulo = 'Diplomacia';
UPDATE libros SET autor = 'Miguel de Cervantes', precio = 140 WHERE titulo = 'Don Quijote de La Mancha II';

-- 8. Insertar 2 nuevos libros
INSERT INTO libros (titulo, codigoeditorial, autor, precio) VALUES 
    ('Cien años de soledad', (SELECT codigo FROM editoriales WHERE nombre = 'Andina'), 'Gabriel García Márquez', 160),
    ('La sombra del viento', (SELECT codigo FROM editoriales WHERE nombre = 'Anaya'), 'Carlos Ruiz Zafón', 150);

-- 9. Eliminar los libros de la editorial Anaya, solo en memoria (ROLLBACK).
-- Iniciar una nueva subtransacción
SAVEPOINT eliminar_anaya; -- Crear un punto de guardado
DELETE FROM libros WHERE codigoeditorial = (SELECT codigo FROM editoriales WHERE nombre = 'Anaya');

-- 10. Volver al SAVEPOINT para revertir la eliminación
ROLLBACK TO eliminar_anaya; -- Esto revertirá la eliminación anterior

-- 11. Actualizar el nombre de la editorial Andina a Iberlibro en memoria.
UPDATE editoriales SET nombre = 'Iberlibro' WHERE nombre = 'Andina';

-- Crear SAVEPOINT para guardar el estado actual
SAVEPOINT cambio_nombre;

-- 12. Actualizar el nombre de la editorial S.M. a Mountain en disco duro.
UPDATE editoriales SET nombre = 'Mountain' WHERE nombre = 'S.M.';
ROLLBACK TO cambio_nombre;
-- 13. Confirmar los cambios restantes en disco.
-- ROLLBACK;
COMMIT;

-- 14. Consultar las tablas para verificar el estado actual
SELECT * FROM editoriales;
SELECT * FROM libros;


-- Iniciar una transacción
BEGIN;

-- Eliminar las tablas específicas
DROP TABLE IF EXISTS editoriales CASCADE;
DROP TABLE IF EXISTS libros CASCADE;

-- Confirmar la transacción
COMMIT;
