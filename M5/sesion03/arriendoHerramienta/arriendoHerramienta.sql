-- Database: arriendoherramientas

-- DROP DATABASE IF EXISTS arriendoherramientas;

CREATE DATABASE arriendoherramientas
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
    Empresa_RUT VARCHAR(10),
    CONSTRAINT fk_empresa FOREIGN KEY (Empresa_RUT) REFERENCES Empresa(RUT)
);

-- Tabla Herramienta
CREATE TABLE Herramienta (
    IDHerramienta SERIAL PRIMARY KEY,
    Nombre VARCHAR(120),
    PrecioDia NUMERIC(12, 2)
);

-- Tabla Arriendo
CREATE TABLE Arriendo (
    Folio SERIAL PRIMARY KEY,
    Fecha DATE,
    Dias INTEGER,
    ValorDia NUMERIC(12, 2),
    Garantia VARCHAR(30),
    Herramienta_IDHerramienta INTEGER,
    Cliente_RUT VARCHAR(10),
    CONSTRAINT fk_herramienta FOREIGN KEY (Herramienta_IDHerramienta) REFERENCES Herramienta(IDHerramienta),
    CONSTRAINT fk_cliente FOREIGN KEY (Cliente_RUT) REFERENCES Cliente(RUT)
);
