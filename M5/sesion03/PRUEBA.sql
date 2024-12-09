DO $$
BEGIN
    IF NOT EXISTS (
        SELECT FROM pg_database
        WHERE datname = 'prueba'
    ) THEN
        EXECUTE 'CREATE DATABASE prueba';
    END IF;
END $$;

