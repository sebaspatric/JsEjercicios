import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

export function readDataFromFile(endpoint) {
  const filePath = path.join(__dirname, `${endpoint}.json`);
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  }
  return null;
}
