SELECT 
    table_name 
FROM 
    information_schema.tables 
WHERE 
    table_schema = 'public' 
    AND table_type = 'BASE TABLE'
ORDER BY table_name  -- Asegúrate de que haya un orden
LIMIT 1 OFFSET 0;  -- Salta la primera fila y selecciona la siguiente



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
        c.table_name = 'actor'
) 
TO 'E:\TalentoDigital\Javascript\M5\practicaCONSOLIDACION\customer_dictionary.csv' 
DELIMITER ',' 
CSV HEADER 
ENCODING 'UTF8';