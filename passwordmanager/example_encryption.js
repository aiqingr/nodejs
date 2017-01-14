var crypto = require('crypto-js');

var secretMessage = 'I love you, Yoyo!';
var secretKey = '123abc';

var encryptedMessage = crypto.AES.encrypt(secretMessage, secretKey);
console.log('secretMessage: ' + encryptedMessage);

var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = bytes.toString(crypto.enc.Utf8);

console.log('decryptedMessage: ' + decryptedMessage);
