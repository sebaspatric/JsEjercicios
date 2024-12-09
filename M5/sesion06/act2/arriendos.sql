-- CUE: RELACIONES
-- DRILLING: ARRIENDO DE HERRAMIENTAS
-- Para resolver este ejercicio, anteriormente debe haber revisado la lectura y los videos del CUE:
-- Relaciones.
-- EJERCICIO
-- Considerando lo aprendido durante el CUE, continuaremos trabajando en la empresa de arriendo
-- de herramientas. Observa el siguiente Modelo Entidad – Relación:
-- Ahora que ya has observado el modelo, debes crear las siguientes sentencias SQL.

-- 1. Listar todos los arriendos con las siguientes columnas: Folio, Fecha, Días, ValorDia, NombreCliente, RutCliente.
select Folio, 
		Fecha,
		Dias,
		ValorDia,
		c.Nombre,
		cliente_RUT
		from arriendo
		inner join cliente as c
		on cliente_RUT = c.RUT;
		
-- 2. Listar los clientes sin arriendos.

SELECT * from cliente as c
left join arriendo as a
	on a.cliente_RUT = c.RUT;


-- 3. Liste RUT y Nombre de las tablas empresa y cliente.

select e.RUT as "empresa",
		e.Nombre as "nombre empresa",
		c.RUT as "rutcliente",
		c.Nombre as "nombrecliente"
		from Empresa as e, Cliente as c;
		

-- 4. Liste la cantidad de arriendos por mes

select 
	TO_CHAR(Fecha, 'YYYY-MM') AS mes,
	count(*) as TotalArriendos,
	sum(ValorDia) as monto
	from arriendo
	group by mes
	order by mes
	;
	