var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var port = 8000;
var app = express();
var compiler = webpack(config);

app.use(express.static(process.cwd()));

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, 'localhost', function (err) {
	if (err) {
		console.log(err);
		return;
	}

	console.log('Listening at http://localhost:%s', port);
});
