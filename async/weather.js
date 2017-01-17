var request = require('request');

module.exports = function (location, callback) {
  var encodedLocation = encodeURIComponent(location);
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation +'&units=imperial&appid=6c80a288b705cbb66950ba2a26a9b5e3';

  if(!location) {
    return callback('No location provided');
  }

  request({
    url: url,
    json: true
  }, function (error, response, body) {
    if (error) {
      callback('Unable to fetch weather.');
    } else {
      callback(body.name + ' is ' + body.main.temp);
    }
  });
}
