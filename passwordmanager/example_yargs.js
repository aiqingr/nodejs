var argv = require('yargs')
    .command('hello', 'Greets the user', function (yargs) {
      yargs.option({
        name: {
          demand: true,
          alias: 'n',
          description: 'Your first name goes true'
        },
        lastname: {
          demand: true,
          alias: 'l',
          description: 'Your last name goes true'
        }
      }).help('help');
    })
    .help('help')
    .argv;
var command = argv._[0];
console.log(argv);
/*
if (argv._[0] === 'hello') {
  console.log('Hello World!');
}
*/
if (command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined') {
  console.log('Hello ' + argv.name + '' +argv.lastname + '!');
}
if (command === 'hello' && typeof argv.name !== 'undefined') {
  console.log('Hello ' + argv.name + '!');
} else if (command === 'hello') {
  console.log('Hello world!');
}
