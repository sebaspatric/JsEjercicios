-- Creación de la tabla Empresa
CREATE TABLE Empresa (
    RUT VARCHAR(10) PRIMARY KEY,
    Nombre VARCHAR(120),
    Direccion VARCHAR(120),
    Telefono VARCHAR(15),
    Correo VARCHAR(80),
    Web VARCHAR(50)
);

-- Creación de la tabla Cliente
CREATE TABLE Cliente (
    RUT VARCHAR(10) PRIMARY KEY,
    Nombre VARCHAR(120),
    Correo VARCHAR(80),
    Direccion VARCHAR(120),
    Celular VARCHAR(15),
    Alta CHAR(1)
);

-- Creación de la tabla TipoVehiculo
CREATE TABLE TipoVehiculo (
    IDTipoVehiculo NUMERIC(12) PRIMARY KEY,
    Nombre VARCHAR(120)
);

-- Creación de la tabla Marca
CREATE TABLE Marca (
    IDMarca NUMERIC(12) PRIMARY KEY,
    Nombre VARCHAR(120)
);

-- Creación de la tabla Vehiculo
CREATE TABLE Vehiculo (
    IDVehiculo NUMERIC(12) PRIMARY KEY,
    Patente VARCHAR(10),
    Marca VARCHAR(20),
    Modelo VARCHAR(20),
    Color VARCHAR(15),
    Precio NUMERIC(12),
    FrecuenciaMantenimiento NUMERIC(5),
    Marca_IDMarca NUMERIC(12),
    TipoVehiculo_IDTipoVehiculo NUMERIC(12),
    CONSTRAINT Vehiculo_Marca_FK FOREIGN KEY (Marca_IDMarca) REFERENCES Marca(IDMarca),
    CONSTRAINT Vehiculo_TipoVehiculo_FK FOREIGN KEY (TipoVehiculo_IDTipoVehiculo) REFERENCES TipoVehiculo(IDTipoVehiculo)
);

-- Creación de la tabla Venta
CREATE TABLE Venta (
    Folio NUMERIC(12) PRIMARY KEY,
    Fecha DATE,
    Monto NUMERIC(12),
    Vehiculo_IDVehiculo NUMERIC(12),
    Cliente_RUT VARCHAR(10),
    CONSTRAINT Venta_Cliente_FK FOREIGN KEY (Cliente_RUT) REFERENCES Cliente(RUT),
    CONSTRAINT Venta_Vehiculo_FK FOREIGN KEY (Vehiculo_IDVehiculo) REFERENCES Vehiculo(IDVehiculo)
);

-- Creación de la tabla Mantenimiento
CREATE TABLE Mantenimiento (
    IDMantenimiento NUMERIC(12) PRIMARY KEY,
    Fecha DATE,
    TrabajosRealizados VARCHAR(1000),
    Venta_Folio NUMERIC(12),
    CONSTRAINT Mantenimiento_Venta_FK FOREIGN KEY (Venta_Folio) REFERENCES Venta(Folio)
);
