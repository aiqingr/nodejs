var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Wuhu&units=imperial&appid=6c80a288b705cbb66950ba2a26a9b5e3';

module.exports = function (callback) {
  request({
    url: url,
    json: true
  }, function (error, response, body) {
    if (error) {
      callback('Unable to fetch weather.');
    } else {
      //console.log(JSON.stringify(body, null, 4));
      // It's 28.4 in Beijing
      callback(body.name + ' is ' + body.main.temp);
    }
  });
}
