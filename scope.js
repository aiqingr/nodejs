var age = 22;
function localFunction () {
  var name = 'yoyo';
  console.log(name);
}
localFunction();
console.log(age);

var ageNew = 26;
function localFunctionNew () {
  var ageNew = 18;

  console.log(ageNew);
  // when we delete the var before the ageNew
  //the last sentense of console.log(ageNew) will be 18
}

localFunctionNew();
console.log(ageNew);
