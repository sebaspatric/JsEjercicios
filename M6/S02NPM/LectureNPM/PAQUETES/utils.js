function sumaDosEnteros(enteroUno, enteroDos) {
    if (typeof enteroUno !== 'number' || typeof enteroDos !== 'number') {
        throw new Error('Los valores deben ser numéricos.');
    }
    if (!Number.isInteger(enteroUno) || !Number.isInteger(enteroDos)) {
        throw new Error('Los valores deben ser enteros.');
    }
    return enteroUno + enteroDos;
}

function multiplicaDosEnteros(enteroUno, enteroDos) {
    if (typeof enteroUno !== 'number' || typeof enteroDos !== 'number') {
        throw new Error('Los valores deben ser numéricos.');
    }
    if (!Number.isInteger(enteroUno) || !Number.isInteger(enteroDos)) {
        throw new Error('Los valores deben ser enteros.');
    }
    return enteroUno * enteroDos;
}

module.exports = { sumaDosEnteros: sumaDosEnteros, multiplicaDosEnteros: multiplicaDosEnteros};

