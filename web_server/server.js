var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello express');
});

//about
app.get('/about', function (req, res) {
  res.send('About us');
});
//about us

app.listen(3010);
