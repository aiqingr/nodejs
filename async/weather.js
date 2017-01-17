var request = require('request');

module.exports = function (location) {
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
