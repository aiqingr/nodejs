var request = require('request');
var url = 'http://ipinfo.io';

module.exports = function (callback) {
  request({
    url: url,
    json: true
  }, function (error, response, body) {
    if (error) {
      callback();
      //callback('Unable to fetch the ip address.');
    } else {
      //console.log(JSON.stringify(body, null, 4));
      // It's 28.4 in Beijing
      //callback('city: ' + location.city);
      //callback('log/lat: ' + location.loc);
      callback(body);
    }
  });
}
