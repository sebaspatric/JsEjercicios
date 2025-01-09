// importamos la libreria de jwt-decode
//const jwt_decode = require('jwt-decode');

//Decodificando el token
//var token =
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUGVkcm8gUGVyZXoiLCJpYXQiOjE2NDU1NjU4NDYuODU3LCJpc3MiOiJsb2NhbGhvc3RAandyLmNvbSIsInN1YiI6InBlZHJvcGVyZXpAdGVzdC5jb20iLCJleHQiOjE2NDU1NzAwOTEuMjE3fQ.r4T7xF8RYskckHBpN92AJgVrZXoRd8ovu - mKTkO4PXA";

//var decoded = jwt_decode(token);
//console.log(decoded);
// importamos la libreria de jwt-decode
const jwt_decode = require('jwt-decode');
//Decodificando el token
var token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUGVkcm8gUGVyZXoiLCJpYXQiOjE2NDU1NjU4NDYuODU3LCJpc3MiOiJsb2NhbGhvc3RAandyLmNvbSIsInN1YiI6InBlZHJvcGVyZXpAdGVzdC5jb20iLCJleHQiOjE2NDU1NzAwOTEuMjE3fQ.r4T7xF8RYskckHBpN92AJgVrZXoRd8ovu - mKTkO4PXA ";
var decoded = jwt_decode(token);
console.log(decoded);
