INSERT INTO "cliente" ("rut", "nombre", "giro", "direccion", "ciudad", "telefono") 
VALUES 
('12345678-9', 'Juan Pérez', 'Comercio', 'Av. Siempre Viva 123', 'Santiago', 987654321),
('98765432-1', 'María López', 'Transporte', 'Calle Falsa 456', 'Valparaíso', 912345678),
('789123-8', 'Carlos Gómez', 'Tecnología', 'Av. Central 789', 'Concepción', 923456789),
('65498732-0', 'Ana Torres', 'Alimentos', 'Pasaje Los Lagos 32', 'Temuco', 934567890);


INSERT INTO "venta" ("numerofactura", "fechaventa", "total", "cliente_rut") 
VALUES 
(2, '2020-02-10', 1500, '12345678-9'),
(3, '2021-03-05', 3000, '98765432-1'),
(4, '2021-07-12', 500, '789123-8'),
(5, '2019-12-25', 4500, '65498732-0');

INSERT INTO "tipocecina" ("id", "nombre") 
VALUES 
(1, 'Embutidos'),
(2, 'Lácteos');

INSERT INTO "cecina" ("id", "nombre", "stock", "precio", "tipocecina_id") 
VALUES 
(1, 'Jamón Serrano', 100, 500, 1),
(2, 'Salame', 50, 800, 1),
(3, 'Longaniza', 200, 300, 2),
(4, 'Queso', 80, 200, 2);

INSERT INTO "detalleventa" ("id", "cantidad", "descripcion", "unitario", "cecina_id", "venta_numerofactura") 
VALUES 
(1, 10, 'Jamón Serrano', 500, 1, 2),
(2, 5, 'Salame', 800, 2, 3),
(3, 20, 'Longaniza', 300, 1, 4),
(4, 15, 'Queso', 200, 3, 5);

INSERT INTO "proveedor" ("rut", "nombre") VALUES
('789123-8', 'Proveedor A'),
('123456-7', 'Proveedor B'),
('987654-3', 'Proveedor C');

INSERT INTO "compra" ("numerofactura", "fecha", "total", "proveedor_rut") VALUES
(1, '2020-01-15', 1500, '789123-8'), -- Compra del Proveedor A
(2, '2020-06-20', 2000, '123456-7'), -- Compra del Proveedor B
(3, '2020-07-22', 2500, '987654-3'); -- Compra del Proveedor C

SELECT column_name
FROM information_schema.columns
WHERE table_name = 'detallecompra';

INSERT INTO "inventarioproduccion" ("id", "nombre", "stock") VALUES
(1, 'Producto A', 50),
(2, 'Producto B', 30),
(3, 'Producto C', 20),
(4, 'Producto D', 15),
(5, 'Producto E', 10);

-- Inserciones en la tabla detallecompra
INSERT INTO "detallecompra" ("cantidad", "descripcion", "unitario", "compra_numerofactura", "inventario_id") VALUES
(10, 'Producto A', 100, 1, 1), -- Aquí usamos inventario_id que existe
(5, 'Producto B', 200, 1, 2), -- Aquí usamos inventario_id que existe
(8, 'Producto C', 250, 2, 3), -- Aquí usamos inventario_id que existe
(3, 'Producto D', 300, 2, 4), -- Aquí usamos inventario_id que existe
(6, 'Producto E', 400, 3, 5); -- Aquí usamos inventario_id que existe

select * 
from "compra"
inner join "detallecompra" 
    on "numerofactura" = "compra_numerofactura"
inner join "proveedor" 
    on "proveedor_rut" = "rut"
where "fecha" between '2020-01-01' and '2020-12-31';

select * 
from "compra"
inner join "detallecompra" 
    on "numerofactura" = "compra_numerofactura"
inner join "proveedor" 
    on "proveedor_rut" = "rut"
where to_char("fecha", 'YYYY') = '2020';


select * from venta;