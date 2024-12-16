import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

export function saveDataToFile(endpoint, data) {
  const filePath = path.join(__dirname, `${endpoint}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
}
