var crypto = require('crypto-js');

var secretMessage = {
  name: 'Yoyo',
  secretName: 'lover'
};
var secretKey = '123abc';

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);
console.log('Encrypted Message: ', encryptedMessage);

var byte = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = JSON.parse(byte.toString(crypto.enc.Utf8));

console.log('decrypted message: ' + decryptedMessage);
console.log(decryptedMessage.secretName);
