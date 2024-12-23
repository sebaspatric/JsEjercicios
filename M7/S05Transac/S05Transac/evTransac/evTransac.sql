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


-- Crear la función para el trigger
CREATE OR REPLACE FUNCTION registrar_historico_tx()
RETURNS TRIGGER AS $$
BEGIN
    -- Agregar un mensaje de depuración para verificar la ejecución del trigger
    RAISE NOTICE 'Se actualizó el balance de cuenta_id: %, Nuevo balance: %', NEW.id, NEW.balance;
    
    -- Insertar un registro en la tabla historicos_tx
    INSERT INTO "historicos_tx" ("idCuenta", "balance", "fecha")
    VALUES (NEW."id", NEW."balance", NOW());

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;




-- Crear el trigger asociado a la tabla cuentas
CREATE TRIGGER guardar_en_historico
AFTER UPDATE OF "balance" ON "cuentas"
FOR EACH ROW
EXECUTE FUNCTION registrar_historico_tx();

SELECT * FROM "cuentas";
SELECT * FROM "cuentas_nva";
SELECT * FROM "historicos_tx";

-- Modificar la tabla historicos_tx para que coincida con los campos esperados
ALTER TABLE "historicos_tx"
    RENAME COLUMN "cuenta_id" TO "idCuenta";

ALTER TABLE "historicos_tx"
    RENAME COLUMN "fecha_movimiento" TO "fecha";
ALTER TABLE "historicos_tx" DROP COLUMN "nombre";


BEGIN;

-- Actualizar el balance de Juan Pérez (id=1)
UPDATE "cuentas"
SET "balance" = "balance" + 500.00
WHERE "id" = 6;

-- Verificar si el balance se ha actualizado en la tabla cuentas
SELECT * FROM "cuentas" WHERE "id" = 6;

-- Verificar si la tabla historicos_tx tiene el nuevo registro
SELECT * FROM "historicos_tx";

-- Confirmar la transacción
COMMIT;


BEGIN;

-- Actualizar el balance de Juan Pérez (id=1)
UPDATE "cuentas"
SET "balance" = "balance" + 500.00
WHERE "id" = 6;

-- Verificar el estado de las tablas antes de hacer ROLLBACK
SELECT * FROM "cuentas" WHERE "id" = 6;  -- Verifica que el balance se haya actualizado
SELECT * FROM "historicos_tx";            -- Verifica que el registro se guardó en historicos_tx

-- Hacer ROLLBACK para deshacer la transacción
ROLLBACK;

-- Verificar las tablas después de hacer ROLLBACK
SELECT * FROM "cuentas" WHERE "id" = 6;  -- Verifica que el balance NO se haya actualizado
SELECT * FROM "historicos_tx";            -- Verifica que el registro NO se haya guardado en historicos_tx

