var express = require('express');
var app = express();

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Template app listening at http://%s:%s', host, port);

});


app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/home', function (req, res) {
  res.send('This is our home page!');
});