SELECT 
  column_name, 
  data_type, 
  character_maximum_length, 
  is_nullable, 
  column_default 
FROM 
  information_schema.columns 
WHERE 
  table_name = 'actor';

-- -----------------
  SELECT
    table_name AS "Tabla",
    column_name AS "Campo",
	character_maximum_length as "Tamaño",
    is_nullable AS "Puede ser Nulo",
    data_type AS "Tipo de Dato"
FROM
    information_schema.columns
WHERE
    table_schema = 'public'  
ORDER BY
    table_name,
    ordinal_position;

-- -----------------------
SELECT
    table_name AS "Tabla", 
    column_name AS "Campo / Atributo", 
    data_type AS "Tipo",
    CASE
        WHEN character_maximum_length IS NOT NULL 
             THEN character_maximum_length::text 
        ELSE '-' 
    END AS "Tamaño",
    is_nullable AS "Puede ser Nulo"
FROM 
    information_schema.columns
WHERE 
    table_schema = 'public'  -- Ajusta si tus tablas están en otro esquema
ORDER BY 
    table_name, ordinal_position;
-- --------------------



SELECT 
    c.table_name AS "Tabla", 
    c.column_name AS "Campo / Atributo", 
    c.data_type AS "Tipo", 
    COALESCE(c.character_maximum_length::text, '-') AS "Tamaño", 
    c.is_nullable AS "Puede ser Nulo", 
    COALESCE(tc.constraint_type, 'Sin restricción') AS "Restricción", 
    COALESCE(fk_info.referencia, 'Sin relación') AS "Relación"
FROM 
    information_schema.columns c
LEFT JOIN 
    information_schema.key_column_usage kcu 
    ON c.table_name = kcu.table_name 
    AND c.column_name = kcu.column_name
LEFT JOIN 
    information_schema.table_constraints tc 
    ON kcu.constraint_name = tc.constraint_name 
    AND tc.table_name = c.table_name
LEFT JOIN (
    SELECT 
        kcu.table_name, 
        kcu.column_name, 
        ccu.table_name AS foreign_table, 
        ccu.column_name AS foreign_column, 
        'Referenciado en: ' || ccu.table_name || '(' || ccu.column_name || ')' AS referencia
    FROM 
        information_schema.key_column_usage kcu
    JOIN 
        information_schema.constraint_column_usage ccu 
        ON kcu.constraint_name = ccu.constraint_name
) fk_info 
    ON c.table_name = fk_info.table_name 
    AND c.column_name = fk_info.column_name
WHERE 
    c.table_schema = 'public'
ORDER BY 
    c.table_name, c.ordinal_position;


-- ----------------------------
SELECT 
    c.table_name AS "Tabla", 
    c.column_name AS "Campo / Atributo", 
    c.data_type AS "Tipo", 
    COALESCE(c.character_maximum_length::text, '-') AS "Tamaño", 
    c.is_nullable AS "Puede ser Nulo", 
    COALESCE(tc.constraint_type, 'Sin restricción') AS "Restricción", 
    COALESCE(fk_info.referencia, 'Sin relación') AS "Relación"
FROM 
    information_schema.columns c
LEFT JOIN 
    information_schema.key_column_usage kcu 
    ON c.table_name = kcu.table_name 
    AND c.column_name = kcu.column_name
LEFT JOIN 
    information_schema.table_constraints tc 
    ON kcu.constraint_name = tc.constraint_name 
    AND tc.table_name = c.table_name
LEFT JOIN (
    SELECT 
        kcu.table_name, 
        kcu.column_name, 
        ccu.table_name AS foreign_table, 
        ccu.column_name AS foreign_column, 
        'Referenciado en: ' || ccu.table_name || '(' || ccu.column_name || ')' AS referencia
    FROM 
        information_schema.key_column_usage kcu
    JOIN 
        information_schema.constraint_column_usage ccu 
        ON kcu.constraint_name = ccu.constraint_name
) fk_info 
    ON c.table_name = fk_info.table_name 
    AND c.column_name = fk_info.column_name
WHERE 
    c.table_schema = 'public'
ORDER BY 
    c.table_name, c.ordinal_position;



DO $$
DECLARE
    tbl RECORD;
BEGIN
    -- Recorrer todas las tablas del esquema 'public'
    FOR tbl IN 
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
    LOOP
        -- Mostrar información de cada tabla
        RAISE NOTICE 'Diccionario de Datos - Tabla: %', tbl.table_name;

        -- Ejecutar consulta para cada tabla y mostrar las columnas con su detalle
        EXECUTE format($sql$
            SELECT 
                c.column_name AS "Campo / Atributo", 
                c.data_type AS "Tipo", 
                COALESCE(c.character_maximum_length::text, '-') AS "Tamaño", 
                c.is_nullable AS "Puede ser Nulo", 
                COALESCE(tc.constraint_type, 'Sin restricción') AS "Restricción", 
                COALESCE(fk_info.referencia, 'Sin relación') AS "Relación"
            FROM 
                information_schema.columns c
            LEFT JOIN 
                information_schema.key_column_usage kcu 
                ON c.table_name = kcu.table_name 
                AND c.column_name = kcu.column_name
            LEFT JOIN 
                information_schema.table_constraints tc 
                ON kcu.constraint_name = tc.constraint_name 
                AND tc.table_name = c.table_name
            LEFT JOIN (
                SELECT 
                    kcu.table_name, 
                    kcu.column_name, 
                    ccu.table_name AS foreign_table, 
                    ccu.column_name AS foreign_column, 
                    'Referenciado en: ' || ccu.table_name || '(' || ccu.column_name || ')' AS referencia
                FROM 
                    information_schema.key_column_usage kcu
                JOIN 
                    information_schema.constraint_column_usage ccu 
                    ON kcu.constraint_name = ccu.constraint_name
            ) fk_info 
                ON c.table_name = fk_info.table_name 
                AND c.column_name = fk_info.column_name
            WHERE 
                c.table_name = '%s'
            ORDER BY 
                c.ordinal_position
        $sql$, tbl.table_name);
    END LOOP;
END $$;

-- --------------------

DO $$
DECLARE
    tbl RECORD;
    col RECORD;
BEGIN
    -- Recorrer todas las tablas del esquema 'public'
    FOR tbl IN 
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
    LOOP
        -- Mostrar el encabezado para cada tabla
        RAISE NOTICE '--------------------------------------';
        RAISE NOTICE 'Diccionario de Datos - Tabla: %', tbl.table_name;
        RAISE NOTICE '--------------------------------------';
        
        -- Recorrer cada columna de la tabla actual
        FOR col IN 
            SELECT 
                c.column_name AS campo_atributo, 
                c.data_type AS tipo, 
                COALESCE(c.character_maximum_length::text, '-') AS tamaño, 
                c.is_nullable AS puede_ser_nulo, 
                COALESCE(tc.constraint_type, 'Sin restricción') AS restricción, 
                COALESCE(fk_info.referencia, 'Sin relación') AS relación
            FROM 
                information_schema.columns c
            LEFT JOIN 
                information_schema.key_column_usage kcu 
                ON c.table_name = kcu.table_name 
                AND c.column_name = kcu.column_name
            LEFT JOIN 
                information_schema.table_constraints tc 
                ON kcu.constraint_name = tc.constraint_name 
                AND tc.table_name = c.table_name
            LEFT JOIN (
                SELECT 
                    kcu.table_name, 
                    kcu.column_name, 
                    ccu.table_name AS foreign_table, 
                    ccu.column_name AS foreign_column, 
                    'Referenciado en: ' || ccu.table_name || '(' || ccu.column_name || ')' AS referencia
                FROM 
                    information_schema.key_column_usage kcu
                JOIN 
                    information_schema.constraint_column_usage ccu 
                    ON kcu.constraint_name = ccu.constraint_name
            ) fk_info 
                ON c.table_name = fk_info.table_name 
                AND c.column_name = fk_info.column_name
            WHERE 
                c.table_name = tbl.table_name
            ORDER BY 
                c.ordinal_position
        LOOP
            -- Mostrar los detalles de cada columna
            RAISE NOTICE 'Campo: %, Tipo: %, Tamaño: %, Nulo: %, Restricción: %, Relación: %',
                col.campo_atributo, col.tipo, col.tamaño, col.puede_ser_nulo, col.restricción, col.relación;
        END LOOP;
    END LOOP;
END $$;

-- -------------------


-- Crear una tabla temporal para almacenar el diccionario de datos
CREATE TEMP TABLE diccionario_datos (
    tabla VARCHAR(100),
    campo_atributo VARCHAR(100),
    tipo VARCHAR(50),
    tamaño VARCHAR(10),
    puede_ser_nulo VARCHAR(10),
    restricción VARCHAR(50),
    relación VARCHAR(100)
);

DO $$
DECLARE
    tbl RECORD;
    col RECORD;
BEGIN
    -- Recorrer todas las tablas del esquema 'public'
    FOR tbl IN 
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
    LOOP
        -- Recorrer cada columna de la tabla actual
        FOR col IN 
            SELECT 
                c.table_name AS tabla,
                c.column_name AS campo_atributo, 
                c.data_type AS tipo, 
                COALESCE(c.character_maximum_length::text, '-') AS tamaño, 
                c.is_nullable AS puede_ser_nulo, 
                COALESCE(tc.constraint_type, 'Sin restricción') AS restricción, 
                COALESCE(fk_info.referencia, 'Sin relación') AS relación
            FROM 
                information_schema.columns c
            LEFT JOIN 
                information_schema.key_column_usage kcu 
                ON c.table_name = kcu.table_name 
                AND c.column_name = kcu.column_name
            LEFT JOIN 
                information_schema.table_constraints tc 
                ON kcu.constraint_name = tc.constraint_name 
                AND tc.table_name = c.table_name
            LEFT JOIN (
                SELECT 
                    kcu.table_name, 
                    kcu.column_name, 
                    ccu.table_name AS foreign_table, 
                    ccu.column_name AS foreign_column, 
                    'Referenciado en: ' || ccu.table_name || '(' || ccu.column_name || ')' AS referencia
                FROM 
                    information_schema.key_column_usage kcu
                JOIN 
                    information_schema.constraint_column_usage ccu 
                    ON kcu.constraint_name = ccu.constraint_name
            ) fk_info 
                ON c.table_name = fk_info.table_name 
                AND c.column_name = fk_info.column_name
            WHERE 
                c.table_name = tbl.table_name
            ORDER BY 
                c.ordinal_position
        LOOP
            -- Insertar los datos en la tabla temporal
            INSERT INTO diccionario_datos (
                tabla, campo_atributo, tipo, tamaño, puede_ser_nulo, restricción, relación
            ) VALUES (
                col.tabla, col.campo_atributo, col.tipo, col.tamaño, col.puede_ser_nulo, col.restricción, col.relación
            );
        END LOOP;
    END LOOP;
END $$;

-- Consultar la tabla temporal para ver el diccionario de datos
SELECT * FROM diccionario_datos ORDER BY tabla, campo_atributo;
-- ------------------------------
SELECT 
    table_name 
FROM 
    information_schema.tables 
WHERE 
    table_schema = 'public' 
    AND table_type = 'BASE TABLE';


-- --------------------
DO $$
DECLARE
    column_info RECORD;
BEGIN
    RAISE NOTICE 'Diccionario de Datos - Tabla: customer';
    RAISE NOTICE 'Campo / Atributo | Tipo | Tamaño | Puede ser Nulo | Restricción | Relación';
    RAISE NOTICE '-------------------------------------------------------------';

    FOR column_info IN 
        SELECT 
            c.column_name AS "Campo / Atributo", 
            c.data_type AS "Tipo", 
            COALESCE(c.character_maximum_length::text, '-') AS "Tamaño", 
            c.is_nullable AS "Puede ser Nulo", 
            COALESCE(tc.constraint_type, 'Sin restricción') AS "Restricción", 
            COALESCE(fk_info.referencia, 'Sin relación') AS "Relación"
        FROM 
            information_schema.columns c
        LEFT JOIN 
            information_schema.key_column_usage kcu 
            ON c.table_name = kcu.table_name 
            AND c.column_name = kcu.column_name
        LEFT JOIN 
            information_schema.table_constraints tc 
            ON kcu.constraint_name = tc.constraint_name 
            AND tc.table_name = c.table_name
        LEFT JOIN (
            SELECT 
                kcu.table_name, 
                kcu.column_name, 
                ccu.table_name AS foreign_table, 
                ccu.column_name AS foreign_column, 
                'Referenciado en: ' || ccu.table_name || '(' || ccu.column_name || ')' AS referencia
            FROM 
                information_schema.key_column_usage kcu
            JOIN 
                information_schema.constraint_column_usage ccu 
            ON kcu.constraint_name = ccu.constraint_name
        ) fk_info 
        ON c.table_name = fk_info.table_name 
        AND c.column_name = fk_info.column_name
        WHERE 
            c.table_name = 'customer'
        ORDER BY 
            c.ordinal_position
    LOOP
        RAISE NOTICE '% | % | % | % | % | %', 
            column_info."Campo / Atributo", 
            column_info."Tipo", 
            column_info."Tamaño", 
            column_info."Puede ser Nulo", 
            column_info."Restricción", 
            column_info."Relación";
    END LOOP;

    RAISE NOTICE '-------------------------------------------------------------';
END $$;

-- ------------------------
SELECT 
    table_name 
FROM 
    information_schema.tables 
WHERE 
    table_schema = 'public' 
    AND table_type = 'BASE TABLE';
-- ------------------

-- Exportar tabla actor usando \COPY
-- Exportar tabla actor usando \COPY
COPY actor TO 'E:\TalentoDigital\Javascript\M5\practicaCONSOLIDACION\actor.csv' DELIMITER ',' CSV HEADER;

-- -------------------------------
SELECT 
    c.column_name AS "Campo / Atributo", 
    c.data_type AS "Tipo", 
    COALESCE(c.character_maximum_length::text, '-') AS "Tamaño", 
    c.is_nullable AS "Puede ser Nulo", 
    COALESCE(tc.constraint_type, 'Sin restricción') AS "Restricción", 
    COALESCE(fk_info.referencia, 'Sin relación') AS "Relación"
FROM 
    information_schema.columns c
LEFT JOIN 
    information_schema.key_column_usage kcu 
    ON c.table_name = kcu.table_name AND c.column_name = kcu.column_name
LEFT JOIN 
    information_schema.table_constraints tc 
    ON kcu.constraint_name = tc.constraint_name AND tc.table_name = c.table_name
LEFT JOIN (
    SELECT 
        kcu.table_name, 
        kcu.column_name, 
        ccu.table_name AS foreign_table, 
        ccu.column_name AS foreign_column, 
        'Referenciado en: ' || ccu.table_name || '(' || ccu.column_name || ')' AS referencia
    FROM 
        information_schema.key_column_usage kcu
    JOIN 
        information_schema.constraint_column_usage ccu 
    ON kcu.constraint_name = ccu.constraint_name
) fk_info 
ON c.table_name = fk_info.table_name AND c.column_name = fk_info.column_name
WHERE 
    c.table_name = 'customer' 
ORDER BY 
    c.ordinal_position;

-- ---------------------------




-- ----------------------------------
SELECT routine_name 
FROM information_schema.routines 
WHERE specific_schema = 'public';


-- ----------------------
COPY (
    SELECT 
        c.column_name AS "Campo / Atributo", 
        c.data_type AS "Tipo", 
        COALESCE(c.character_maximum_length::text, '-') AS "Tamaño", 
        c.is_nullable AS "Puede ser Nulo", 
        COALESCE(tc.constraint_type, 'Sin restricción') AS "Restricción", 
        COALESCE(fk_info.referencia, 'Sin relación') AS "Relación"
    FROM 
        information_schema.columns c
    LEFT JOIN 
        information_schema.key_column_usage kcu 
        ON c.table_name = kcu.table_name AND c.column_name = kcu.column_name
    LEFT JOIN 
        information_schema.table_constraints tc 
        ON kcu.constraint_name = tc.constraint_name AND tc.table_name = c.table_name
    LEFT JOIN (
        SELECT 
            kcu.table_name, 
            kcu.column_name, 
            ccu.table_name AS foreign_table, 
            ccu.column_name AS foreign_column, 
            'Referenciado en: ' || ccu.table_name || '(' || ccu.column_name || ')' AS referencia
        FROM 
            information_schema.key_column_usage kcu
        JOIN 
            information_schema.constraint_column_usage ccu 
        ON kcu.constraint_name = ccu.constraint_name
    ) fk_info 
    ON c.table_name = fk_info.table_name AND c.column_name = fk_info.column_name
    WHERE 
        c.table_name = 'customer'
) 
TO 'E:\TalentoDigital\Javascript\M5\practicaCONSOLIDACION\customer_dictionary.csv' 
DELIMITER ',' 
CSV HEADER 
ENCODING 'UTF8';


SELECT 
    pg_encoding_to_char(encoding) AS encoding,
    datname AS database_name
FROM 
    pg_database
WHERE 
    datname = 'dvdrental';
SHOW SERVER_ENCODING;


-- -----------------------
SELECT 
    table_name 
FROM 
    information_schema.tables 
WHERE 
    table_schema = 'public' 
    AND table_type = 'BASE TABLE'
ORDER BY table_name  -- Asegúrate de que haya un orden
;  -- Salta la primera fila y selecciona la siguiente
