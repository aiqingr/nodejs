console.log('Starting password manager!');

var storage = require('node-persist');
storage.initSync();

var argv = require('yargs')
  .command('create', 'Create a new account', function (yargs) {
    yargs.option({
      name: {
        demand: true,
        alias: 'n',
        description: 'Account name (eg: Twitter, Facebook)',
        typeof: 'string'
      },
      username: {
        demand: true,
        alias: 'u',
        description: 'Account username or email',
        typeof: 'string'
      },
      password: {
        demand: true,
        alias: 'p',
        description: 'Account password',
        typeof: 'string'
      }
    }).help('help');
  })
  .command('get', 'Get an existing account', function (yargs) {
    yargs.option({
      name: {
        demand: true,
        alias: 'n',
        description: 'Account name (eg: Twitter, Facebook)',
        typeof: 'string'
      }
    }).help('help');
  })
  .help('help')
  .argv;
var command = argv._[0];

//create
//  --name
//  --username
//  --password

//get
//  --name


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

if (command === 'create') {
  var createdAccount = createAccount({
    name: argv.name,
    username: argv.username,
    password: argv.password
  });
  console.log('Account created: ', createdAccount);
} else if (command === 'get') {
  var fetchedAccount = getAccount(argv.name);
  if (typeof fetchedAccount === 'undefined') {
    console.log('Account not found');
  } else {
    console.log('Account found: ', fetchedAccount);
  }
}
