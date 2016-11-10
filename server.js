var express = require('express');
var app = express();

app.enable('trust proxy');
var port = 80;

app.listen(port, function(req, res) {
	console.log('listening on', port);
});

app.get('*', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});