import { fetchAndSaveData } from './src/fetchAndSaveData.js';
import { showMenu } from './src/showMenu.js';

const endpoint = process.argv[2];

if (['comments', 'photos', 'albums', 'todos', 'posts'].includes(endpoint)) {
  await fetchAndSaveData(endpoint);
  setTimeout(() => showMenu(endpoint), 2000);
} else {
  console.log('Por favor, pasa un argumento válido: comments, photos, albums, todos o posts.');
}
