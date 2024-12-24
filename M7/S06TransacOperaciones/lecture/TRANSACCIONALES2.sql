DECLARE @BookCount int
Begin AddBook;
INSERT INTO Books VALUES (20, 'Book15', 'Cat5', 2000);
SELECT @BookCount = count(*) FROM Books WHERE name =’Book15’;
IF @BookCount > 1
BEGIN
ROLLBACK AddBook
print ‘Un libro con el mismo nombre ya existe’
END
ELSE
BEGIN
COMMIT AddBook
print ‘El nuevo libro ha sido agregado
satisfactoriamente’
END
End transaction;

-- SELECT @@autocommit;