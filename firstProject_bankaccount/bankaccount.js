var accounts = [];

//Account Object
//balance
//username

//createAccount(account)
//push onto accounts array
//return account
function createAccount (account) {
  accounts.push(account);
  return account;
}

//getAccount(username)
//find matching account using forEach
function getAccount (username) {
  var matchedAccount;

  accounts.forEach(function (account){
    if (account.username === username) {
      matchedAccount = account;
    }
  });

  return matchedAccount;
}

//deposit(account, amount)
function deposit (account, amount) {
  account.balance += amount;
  //account.balance = account.balance + amount;
}

//withdraw(account, amount)
function withdraw (account, amount) {
  account.balance -= amount;
}
//getBalance(account)
function getBalance (account) {
  return account.balance;
}

var yoyoAccount = createAccount({
  username: 'yoyo',
  balance: 0
});

deposit(yoyoAccount, 100);
console.log(getBalance(yoyoAccount));

withdraw(yoyoAccount, 11);
console.log(getBalance(yoyoAccount));

var existingAccount = getAccount('yoyo');
console.log(getBalance(yoyoAccount));

var tianAccount = createAccount({
  username: 'tianqi',
  balance: 12
});

console.log(accounts);

var existingTianAccount = getAccount('tianqi');
console.log(existingTianAccount);
