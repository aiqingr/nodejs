console.log('Starting password manager!');

var storage = require('node-persist');
storage.initSync();

/*storage.setItemSync('accounts', [{
  username: 'yoyo',
  balance: 0
}]);
*/

//var accounts = storage.getItemSync('accounts');

//push on a new account
/*
accounts.push({
  username: 'Chen',
  balance: 75
});
*/

//save using setItemSync
//storage.setItemSync('accounts', accounts);

//console.log(accounts);

//account.name Facebook
//account.username User12!
//account.password password123!
function createAccount (account) {
  var accounts = storage.getItemSync('accounts');

  //if accounts is undefined (use typeof)
  //  set accounts = [];
  if (typeof accounts === 'undefined') {
    accounts = [];
  }
  //push on a new account
  accounts.push(account);

  storage.setItemSync('accounts', accounts);
  //return account
  return account;
}

function getAccount (accountName) {
  //var accounts use getItemSync
  var accounts = storage.getItemSync('accounts');
  //iterate over array, return atching account, else undefined
  var matchedAccount;

  accounts.forEach(function (account) {
    if (account.name === accountName) {
      matchedAccount = account;
    }
  });

  return matchedAccount;
}

/*
createAccount({
  name: 'Facebook',
  username: 'someemail@gmail.com',
  password: 'Password123!'
});
*/

var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);
