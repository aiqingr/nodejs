var person = {};
var nickNameProperty = 'nickName';

person.firstName = 'Tianqi';
person.lastName = 'Chen';
person['nickNameProperty'] = 'yoyo';
person.age = 22;

delete person.age;

console.log(person);

function greetUser (person) {
  console.log('I love you, ' + person.lastName + person.firstName + person['nickNameProperty']);
}

greetUser(person);

var pet = {
  name: 'jiajia',
  type: 'dog'
};

function printpet(pet) {
  console.log('Your ' + pet.type + ' is named ' + pet.name);
}

printpet(pet);
