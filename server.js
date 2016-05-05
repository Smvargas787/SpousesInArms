var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.resolve(__dirname, "./SpousesInArms")))

app.listen(3000);
