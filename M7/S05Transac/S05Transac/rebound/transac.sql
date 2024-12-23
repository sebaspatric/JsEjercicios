CREATE TABLE "cuentas" (
    "id" SERIAL,
    "nombre" VARCHAR(50) NOT NULL,
    "balance" DEC(15,2) NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE "cuentas_nva" (
    "id" SERIAL,
    "nombre" VARCHAR(50) NOT NULL,
    "balance" DEC(15,2) NOT NULL,
    PRIMARY KEY ("id")
);

SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public';

CREATE TABLE "historicos_tx" (
    "id" SERIAL,
    "cuenta_id" INT NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "balance" DEC(15,2) NOT NULL,
    "fecha_movimiento" TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY ("id"),
    FOREIGN KEY ("cuenta_id") REFERENCES "cuentas"("id")
);

-- Insertar datos iniciales en la tabla 'cuentas'
INSERT INTO "cuentas" ("nombre", "balance") VALUES
('Juan Pérez', 1500.50),
('Ana López', 2500.00),
('Carlos Ruiz', 500.75),
('María Gómez', 3000.00),
('Luis Fernández', 1000.00);

ALTER TABLE "historicos_tx"
ALTER COLUMN "cuenta_id" DROP NOT NULL;

ALTER TABLE "historicos_tx"
DROP CONSTRAINT "historicos_tx_cuenta_id_fkey",
ADD CONSTRAINT "historicos_tx_cuenta_id_fkey"
FOREIGN KEY ("cuenta_id") REFERENCES "cuentas"("id") ON DELETE SET NULL;




BEGIN;

-- Paso 1: Migrar datos de 'cuentas' a 'cuentas_nva'
INSERT INTO "cuentas_nva" ("nombre", "balance")
SELECT "nombre", "balance" FROM "cuentas";

-- Paso 2: Respaldar datos originales en 'historicos_tx'
INSERT INTO "historicos_tx" ("cuenta_id", "nombre", "balance")
SELECT "id", "nombre", "balance" FROM "cuentas";

-- Verificar los datos antes de confirmar
SELECT * FROM "cuentas";
SELECT * FROM "cuentas_nva";
SELECT * FROM "historicos_tx";




-- Paso 3: Eliminar datos de 'cuentas' para evitar duplicidad
DELETE FROM "cuentas";
SELECT * FROM "cuentas";

ROLLBACK;
SELECT * FROM "cuentas";

-- Confirmar la transacción si todo salió bien
COMMIT;
