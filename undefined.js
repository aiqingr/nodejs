var name = 'yoyo';

name = undefined;

//console.log(name);

function doesNothing (age) {
  console.log(age);
}

//console.log(doesNothing());
doesNothing();

var newName = undefined;

if (newName === undefined) {
  console.log('New name is undefined');
}

if (typeof x === 'undefined') {
  console.log('x is undefined!');
}

//function greetUser(name)
function greetUser (lover) {
  if (typeof lover === 'undefined') {
    console.log('Hello world!');
  } else {
    console.log('Hello ' + lover + '!');
  }
}

greetUser('yoyo');
greetUser();
