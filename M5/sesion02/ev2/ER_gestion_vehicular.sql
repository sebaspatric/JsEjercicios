-- Crear las tablas y relaciones
CREATE TABLE Empresa (
    RUT VARCHAR(10) PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Direccion VARCHAR(150),
    Telefono VARCHAR(15),
    Correo VARCHAR(100),
    Web VARCHAR(100)
);

CREATE TABLE Cliente (
    RUT VARCHAR(10) PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Correo VARCHAR(100),
    Direccion VARCHAR(150),
    Celular VARCHAR(15),
    Alta DATE,
    RUTEmpresa VARCHAR(10) NOT NULL,
    CONSTRAINT FK_EmpresaCliente FOREIGN KEY (RUTEmpresa) REFERENCES Empresa(RUT)
);

CREATE TABLE Marca (
    IDMarca SERIAL PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL
);

CREATE TABLE TipoVehiculo (
    IDTipoVehiculo SERIAL PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL
);

CREATE TABLE Vehiculo (
    IDVehiculo SERIAL PRIMARY KEY,
    Patente VARCHAR(10) UNIQUE NOT NULL,
    IDMarca INTEGER NOT NULL,
    IDTipoVehiculo INTEGER NOT NULL,
    Modelo VARCHAR(50),
    Color VARCHAR(30),
    Precio NUMERIC(12, 2),
    FrecuenciaMantenimiento VARCHAR(50),
    CONSTRAINT FK_Marca FOREIGN KEY (IDMarca) REFERENCES Marca(IDMarca),
    CONSTRAINT FK_TipoVehiculo FOREIGN KEY (IDTipoVehiculo) REFERENCES TipoVehiculo(IDTipoVehiculo)
);

CREATE TABLE Venta (
    Folio SERIAL PRIMARY KEY,
    RUTCliente VARCHAR(10) NOT NULL,
    IDVehiculo INTEGER NOT NULL,
    Fecha DATE NOT NULL,
    Monto NUMERIC(12, 2) NOT NULL,
    CONSTRAINT FK_Cliente FOREIGN KEY (RUTCliente) REFERENCES Cliente(RUT),
    CONSTRAINT FK_Vehiculo FOREIGN KEY (IDVehiculo) REFERENCES Vehiculo(IDVehiculo)
);

DROP TABLE IF EXISTS Mantenimiento; -- Eliminar la tabla si ya existe
CREATE TABLE Mantenimiento (
    IDMantenimiento SERIAL PRIMARY KEY,
    FolioVenta INTEGER, -- Manteniendo la relación con Venta
    Fecha DATE NOT NULL,
    TrabajosRealizados TEXT,
    CONSTRAINT FK_VentaMantenimiento FOREIGN KEY (FolioVenta) REFERENCES Venta(Folio) -- Relación con Venta
);
