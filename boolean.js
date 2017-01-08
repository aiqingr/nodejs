var isValid = false;

//Make the isValid to true
isValid = !isValid;

console.log('a' === 'b');

if (isValid === true) {
  console.log('Data is valid!');
} else {
  console.log('Data is not valid');
}

if (isValid) {
  console.log('New data is valid');
} else {
  console.log('New data is false!');
}

var newValid = false;

function toggleBoolean (booleanVar) {
  if (typeof booleanVar === 'boolean'){
    return !booleanVar;
  } else {
    console.log('Warning! Not a boolean.');
  }
  /*
  The same way to convert true to false, false to true
  if (booleanVar === true) {
    return false;
  } else {
    return true;
  }
  */
}

var newBoolean = toggleBoolean(newValid);
console.log(newBoolean);

var newNotBoolean = toggleBoolean('yoyo');
console.log(newNotBoolean);
