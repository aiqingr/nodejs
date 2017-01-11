// countDownWhile(startingPoint, stoppingPoiont)
function countDownWhile (startingPoint, stoppingPoiont) {
  while (startingPoint >= stoppingPoiont) {
    console.log('countDownWhile: ', startingPoint);
    startingPoint--;
  }
}
countDownWhile(10, 0);

//countDownFor

function countDownFor (startingPoint, stoppingPoiont) {
  for (; startingPoint >= stoppingPoiont; startingPoint--) {
    console.log('countDownFor: ' + startingPoint);
  }
}
countDownFor(11, 1);

var i = 0;
var countLimit = 8;

while (i < countLimit) {
  console.log('While:' + i);
  i++; // i = i + 1
}

for (i = 0; i < countLimit; i++) {
  console.log('for: ', i);
}
