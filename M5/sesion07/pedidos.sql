select * from pedidos;

select * from pedidos 
order by numero_pedido;

alter table pedidos add column monto numeric(12,2);

update pedidos set monto = 112000 where numero_pedido >= 1 and numero_pedido <=10;

UPDATE pedidos SET monto = 35646 WHERE numero_pedido between 11 and 20;

UPDATE pedidos SET monto = 25290 WHERE numero_pedido between 21 and 40;

UPDATE pedidos SET monto = 25290 WHERE numero_pedido between 41 and 71;
UPDATE pedidos SET monto = 30220 WHERE numero_pedido > 71;

select avg(monto) from pedidos;

-- generar una consulta donde se observen todaas las columnas de laa tablaa pedidos
-- donde el monto < promedio de todos los montos de los pedidos

select * from pedidos where
monto <= (select avg(monto) from pedidos);



WITH avg_monto AS (
    SELECT AVG(monto) AS promedio
    FROM pedidos
)
SELECT p.*
FROM pedidos p
JOIN avg_monto a ON p.monto <= a.promedio;


DO $$
DECLARE
    inicio TIMESTAMP;
    fin TIMESTAMP;
    duracion INTERVAL;
BEGIN
    inicio := clock_timestamp();

    -- Aquí va tu consulta, utilizando PERFORM
    PERFORM * FROM pedidos WHERE monto <= (SELECT AVG(monto) FROM pedidos);

    fin := clock_timestamp();
    duracion := fin - inicio;

    RAISE NOTICE 'Duración de la consulta: %', duracion;
END $$;


DO $$
DECLARE
    inicio TIMESTAMP;
    fin TIMESTAMP;
    duracion INTERVAL;
BEGIN
    inicio := clock_timestamp();

    -- Ejecutar la consulta y descartar resultados con PERFORM
    PERFORM *
    FROM (
        WITH avg_monto AS (
            SELECT AVG(monto) AS promedio
            FROM pedidos
        )
        SELECT p.*
        FROM pedidos p
        JOIN avg_monto a ON p.monto <= a.promedio
    ) subquery;

    fin := clock_timestamp();
    duracion := fin - inicio;

    RAISE NOTICE 'Duración de la consulta: %', duracion;
END $$;

select * from clientes ;
select * from pedidos ;

select c.cod_cliente,
		c.empresa,
		COUNT(*) AS cantidad_pedidos,
		SUM(monto) AS total_pedidos
FROM clientes AS c, pedidos AS p
WHERE P.cod_cliente = c.cod_cliente
GROUP BY c.cod_cliente, c.empresa
HAVING COUNT(*) >= 5
ORDER BY c.cod_cliente;

SELECT c.cod_cliente,
       c.empresa,
       COUNT(*) AS cantidad_pedidos,
       SUM(p.monto) AS total_pedidos
FROM clientes AS c
JOIN pedidos AS p ON p.cod_cliente = c.cod_cliente
GROUP BY c.cod_cliente, c.empresa
HAVING COUNT(*) >= 5
ORDER BY c.cod_cliente;

SELECT c.empresa, cod_cliente,
       (SELECT COUNT(*)
        FROM pedidos AS p
        WHERE p.cod_cliente = c.cod_cliente) AS cantidad_pedidos,
       (SELECT SUM(monto)
        FROM pedidos AS p
        WHERE p.cod_cliente = c.cod_cliente) AS total_pedidos
FROM clientes AS c
WHERE (SELECT COUNT(*)
       FROM pedidos AS p
       WHERE p.cod_cliente = c.cod_cliente) >= 5
ORDER BY c.empresa;


WITH cantidad_y_total AS (
    SELECT cod_cliente,
           COUNT(*) AS cantidad_pedidos,
           SUM(monto) AS total_pedidos
    FROM pedidos
    GROUP BY cod_cliente
)
SELECT c.empresa,
       ct.cantidad_pedidos,
       ct.total_pedidos
FROM clientes AS c,
     cantidad_y_total AS ct
WHERE ct.cod_cliente = c.cod_cliente
  AND ct.cantidad_pedidos >= 5
ORDER BY c.empresa;

