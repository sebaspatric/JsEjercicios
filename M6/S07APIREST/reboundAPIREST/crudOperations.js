const fs = require('fs/promises');
const { v4: uuidv4 } = require('uuid');

async function readData(fileName) {
    try {
        const data = await fs.readFile(fileName, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            // Si el archivo no existe, retornamos un objeto vacío
            return {};
        }
        throw error;
    }
}

async function writeData(fileName, data) {
    await fs.writeFile(fileName, JSON.stringify(data, null, 2));
}

async function getAllItems(fileName) {
    return await readData(fileName);
}

async function addItem(fileName, item) {
    const data = await readData(fileName);
    const id = uuidv4();
    data[id] = item;
    await writeData(fileName, data);
    return id;
}

async function updateItem(fileName, id, updatedItem) {
    const data = await readData(fileName);
    if (!data[id]) {
        throw new Error(`Item with id ${id} not found`);
    }
    data[id] = { ...data[id], ...updatedItem };
    await writeData(fileName, data);
}

async function deleteItem(fileName, id) {
    const data = await readData(fileName);
    if (!data[id]) {
        throw new Error(`Item with id ${id} not found`);
    }
    delete data[id];
    await writeData(fileName, data);
}

module.exports = {
    getAllItems,
    addItem,
    updateItem,
    deleteItem
};
