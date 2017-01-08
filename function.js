function greetUser () {
  console.log('Hello World!');
}

greetUser();

function greetUser1 (name) {
  console.log('Hello' + name);
}

greetUser1('yoyo');

function greetUser2 (name, fullName) {
  console.log('Hello' + name + ', I really love you, ' + fullName);
}

greetUser2('yoyo', 'Chen Tianqi');

function greetUser3 (name, fullName) {
  return 'Hello ' + name + '!' + ' I love you, ' + fullName;
}

var greeting = greetUser3 ('yoyo', 'Chen Tianqi');
console.log('greeting = ', greeting);

function add (a, b) {
  return a + b;
}

var result = add(1, 100);
console.log(result);
console.log(add(2, 3));
