var express = require('express');
var app = express();
app.disable("x-powered-by");

app.get('/healthcheck', function (req, res) {
   res.end("ok")
})

app.get('/info', function (req, res) {
   res.end("nodejs")
})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})