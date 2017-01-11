var accounts = [];

function createAccount (account) {
  accounts.push(account);
  return account;
}

function getAccount (username) {
  var matchedAccount;

  for (var i = 0; i < accounts.length; i++) {
    if (accounts[i].username === username) {
      matchedAccount = accounts[i];
    }
  }

  return matchedAccount;
}

function deposit (account, amount) {
  if (typeof amount === 'number') {
    account.balance += amount;
  } else {
    console.log('deposit failed, amount is not a number!');
  }
}

function withdraw (account, amount) {
  if (typeof amount === 'number') {
    account.balance -= amount;
  } else {
    console.log('Withdraw failed, amount is not a number!');
  }
}

function getBalance (account) {
  return account.balance;
}

function createrBalanceGetter (account) {
  return function () {
    return account.balance;
  }
}

var yoyo = createAccount({
  username: 'yoyo',
  balance: 0
});

deposit(yoyo, 120);
withdraw(yoyo, 'my string');

var yoyoL = getAccount('yoyo');
var getYoyoLBalance = createrBalanceGetter(yoyoL);

console.log(getYoyoLBalance());
