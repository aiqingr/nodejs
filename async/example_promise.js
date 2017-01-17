// function doWork (data, callback) {
//   callback('done');
// }
//
// function doWorkPromise (data) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       reject('everything is broken!');
//     }, 1000);
//     // reject({
//     //   error: 'something bad happened'
//     // });
//   });
// }
//
// doWorkPromise('some data').then(function (data) {
//   console.log(data);
// }, function (error) {
//   console.log(error);
// });

var request = require('request');
function getWeather (location) {
  return new Promise(function (resolve, reject) {
    var encodedLocation = encodeURIComponent(location);
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation +'&units=imperial&appid=6c80a288b705cbb66950ba2a26a9b5e3';

    if(!location) {
      return reject('No location provided');
    }

    request({
      url: url,
      json: true
    }, function (error, response, body) {
      if (error) {
        reject('Unable to fetch weather.');
      } else {
        resolve(body.name + ' is ' + body.main.temp);
      }
    });
  });
}

getWeather('Beijing').then(function (currentWeather) {
  console.log(currentWeather);
}, function (error) {
  console.log(error);
});
