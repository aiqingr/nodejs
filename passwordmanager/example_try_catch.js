function doWork () {
  //throw error that say 'Unable to do work'
  throw new Error('Unable to do work');
}
try {
  doWork();
} catch (e) {
  console.log(e.message);
} finally {
  console.log('Finally block executed!');
}

console.log('try catch ended');
