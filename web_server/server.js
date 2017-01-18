var express = require('express');
var app = express();
var port = 3010

//about
app.get('/about', function (req, res) {
  res.send('About us');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
  console.log('Express server' + port + 'started!');
});
