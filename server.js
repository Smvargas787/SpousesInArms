var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.resolve(__dirname, "./static")));
app.get("*", function(req , res, next) {
  res.sendFile(__dirname + '/static/index.html');
});
app.listen(3000);
