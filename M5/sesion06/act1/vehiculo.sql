-- Database: empresa

-- DROP DATABASE IF EXISTS empresa;

CREATE DATABASE empresa
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Mexico.1252'
    LC_CTYPE = 'Spanish_Mexico.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- Tabla Empresa
CREATE TABLE Empresa (
    RUT VARCHAR(10) PRIMARY KEY,
    Nombre VARCHAR(120),
    Direccion VARCHAR(120),
    Telefono VARCHAR(15),
    Correo VARCHAR(80),
    Web VARCHAR(50)
);

-- Tabla Cliente
CREATE TABLE Cliente (
    RUT VARCHAR(10) PRIMARY KEY,
    Nombre VARCHAR(120),
    Correo VARCHAR(80),
    Direccion VARCHAR(120),
    Celular VARCHAR(15),
    Alta CHAR(1)
);

-- Tabla TipoVehiculo
CREATE TABLE TipoVehiculo (
    IDTipoVehiculo SERIAL PRIMARY KEY,
    Nombre VARCHAR(120)
);

-- Tabla Marca
CREATE TABLE Marca (
    IDMarca SERIAL PRIMARY KEY,
    Nombre VARCHAR(120)
);

-- Tabla Vehiculo
CREATE TABLE Vehiculo (
    IDVehiculo SERIAL PRIMARY KEY,
    Patente VARCHAR(10),
    Marca VARCHAR(20),
    Modelo VARCHAR(20),
    Color VARCHAR(15),
    Precio NUMERIC(12, 2),
    FrecuenciaMantenimiento INTEGER,
    Marca_IDMarca INTEGER,
    TipoVehiculo_IDTipoVehiculo INTEGER,
    CONSTRAINT fk_marca FOREIGN KEY (Marca_IDMarca) REFERENCES Marca(IDMarca),
    CONSTRAINT fk_tipovehiculo FOREIGN KEY (TipoVehiculo_IDTipoVehiculo) REFERENCES TipoVehiculo(IDTipoVehiculo)
);

-- Tabla Venta
CREATE TABLE Venta (
    Folio SERIAL PRIMARY KEY,
    Fecha DATE,
    Monto NUMERIC(12, 2),
    Vehiculo_IDVehiculo INTEGER,
    Cliente_RUT VARCHAR(10),
    CONSTRAINT fk_vehiculo FOREIGN KEY (Vehiculo_IDVehiculo) REFERENCES Vehiculo(IDVehiculo),
    CONSTRAINT fk_cliente FOREIGN KEY (Cliente_RUT) REFERENCES Cliente(RUT)
);

-- Tabla Mantenimiento
CREATE TABLE Mantenimiento (
    IDMantenimiento SERIAL PRIMARY KEY,
    Fecha DATE,
    TrabajosRealizados VARCHAR(1000),
    Venta_Folio INTEGER,
    CONSTRAINT fk_venta FOREIGN KEY (Venta_Folio) REFERENCES Venta(Folio)
);


ALTER TABLE Cliente
ADD COLUMN Empresa_RUT VARCHAR(10);  -- Añadir la columna para la relación

ALTER TABLE Cliente
ADD CONSTRAINT fk_empresa FOREIGN KEY (Empresa_RUT) REFERENCES Empresa(RUT);
