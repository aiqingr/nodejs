var person = {
  name: 'Yoyo',
  age: 22
};
var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);
console.log(personObject.name);
console.log(personObject.age);
console.log(typeof personObject);

console.log('CHANLLENGE AREA');

var animal = '{"name": "qiqi"}';
//convert to js object
//add age prop
//convert to JSON
//log out
var animalObject = JSON.parse(animal);
console.log(animalObject);
animalObject.age = 22;
console.log(animalObject);
var animalJSON = JSON.stringify(animalObject);
console.log(animalJSON);
