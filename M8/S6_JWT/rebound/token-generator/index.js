// sudo apt update
// sudo apt install nodejs npm

//mkdir token-generator
//cd token-generator
//npm init -y

//npm install crypto-random-string
//$ npm install crypto-random-string@latest

import cryptoRandomString from 'crypto-random-string';

console.log('Base64:', cryptoRandomString({ length: 16, type: 'base64' }));
console.log('Base64URL (url-safe):', cryptoRandomString({ length: 16, type: 'url-safe' }));
console.log('Hexadecimal:', cryptoRandomString({ length: 16, type: 'hex' }));
console.log('Alfanumérico:', cryptoRandomString({ length: 16, type: 'alphanumeric' }));
