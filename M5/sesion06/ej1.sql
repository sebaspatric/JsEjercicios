
-- 1. Tabla Maquinaria
CREATE TABLE Maquinaria (
    id SERIAL PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL
);

-- 2. Tabla PlantaProduccion
CREATE TABLE PlantaProduccion (
    id SERIAL PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Maquinaria_id INTEGER REFERENCES Maquinaria(id) ON DELETE SET NULL
);

-- 3. Tabla Produccion
CREATE TABLE Produccion (
    id SERIAL PRIMARY KEY,
    FechaInicio DATE NOT NULL,
    FechaTermino DATE,
    PlantaProd_id INTEGER REFERENCES PlantaProduccion(id) ON DELETE CASCADE
);

-- 4. Tabla Bodega
CREATE TABLE Bodega (
    id SERIAL PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL
);

-- 5. Tabla DetalleProduccion
CREATE TABLE DetalleProduccion (
    id SERIAL PRIMARY KEY,
    CantidadEsperada NUMERIC NOT NULL,
    CantidadObtenida NUMERIC NOT NULL,
    FechaInicio DATE NOT NULL,
    FechaTermino DATE,
    Bodega_id INTEGER REFERENCES Bodega(id) ON DELETE CASCADE,
    Produccion_id INTEGER REFERENCES Produccion(id) ON DELETE CASCADE
);

-- 6. Tabla Proveedor
CREATE TABLE Proveedor (
    Rut VARCHAR(15) PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL
);

-- 7. Tabla Compra
CREATE TABLE Compra (
    NumeroFactura NUMERIC PRIMARY KEY,
    Fecha DATE NOT NULL,
    Total NUMERIC NOT NULL,
    Proveedor_Rut VARCHAR(15) REFERENCES Proveedor(Rut) ON DELETE SET NULL
);

-- 8. Tabla InventarioProduccion
CREATE TABLE InventarioProduccion (
    id SERIAL PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Stock INTEGER NOT NULL
);

-- 9. Tabla DetalleCompra
CREATE TABLE DetalleCompra (
    id SERIAL PRIMARY KEY,
    Cantidad INTEGER NOT NULL,
    Descripcion VARCHAR(255) NOT NULL,
    Unitario NUMERIC NOT NULL,
    Compra_NumeroFactura NUMERIC REFERENCES Compra(NumeroFactura) ON DELETE CASCADE,
    Inventario_id INTEGER REFERENCES InventarioProduccion(id) ON DELETE SET NULL
);

-- 10. Tabla Receta
CREATE TABLE Receta (
    id SERIAL PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL
);

-- 11. Tabla DetalleReceta
CREATE TABLE DetalleReceta (
    id SERIAL PRIMARY KEY,
    IdReceta INTEGER REFERENCES Receta(id) ON DELETE CASCADE,
    IdInventarioProduccion INTEGER REFERENCES InventarioProduccion(id) ON DELETE CASCADE,
    Cantidad NUMERIC NOT NULL
);

-- 12. Tabla Cliente
CREATE TABLE Cliente (
    Rut VARCHAR(15) PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Giro VARCHAR(100),
    Direccion VARCHAR(255),
    Ciudad VARCHAR(100),
    Telefono NUMERIC
);

-- 13. Tabla Venta
CREATE TABLE Venta (
    NumeroFactura NUMERIC PRIMARY KEY,
    FechaVenta DATE NOT NULL,
    Total NUMERIC NOT NULL,
    Cliente_rut VARCHAR(15) REFERENCES Cliente(Rut) ON DELETE SET NULL
);

-- 14. Tabla TipoCecina
CREATE TABLE TipoCecina (
    id SERIAL PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL
);

-- 15. Tabla Cecina
CREATE TABLE Cecina (
    id SERIAL PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Stock INTEGER NOT NULL,
    Precio NUMERIC NOT NULL,
    TipoCecina_id INTEGER REFERENCES TipoCecina(id) ON DELETE SET NULL
);

-- 16. Tabla DetalleVenta
CREATE TABLE DetalleVenta (
    id SERIAL PRIMARY KEY,
    Cantidad INTEGER NOT NULL,
    Descripcion VARCHAR(255) NOT NULL,
    Unitario NUMERIC NOT NULL,
    Cecina_id INTEGER REFERENCES Cecina(id) ON DELETE CASCADE,
    Venta_numeroFactura NUMERIC REFERENCES Venta(NumeroFactura) ON DELETE CASCADE
);
