var express = require('express');
var request = require('request');
var server = express();
var http = require('http');
var bodyParser = require('body-parser');
server.use('/', express.static(__dirname + '/public/'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

var router = express.Router();

router.get('/test', function(req, res) {
	res.json([]);
});

router.get('/categories', function(req, res) {
	request('https://sandbox-api.brewerydb.com/v2/styles/?key=b8a2e919687a3c534e6dc1a804e99765', function (error, response, body) {
		
		res.json(JSON.parse(body).data);
	});
});

router.get('/beers/:styleId', function(req, res) {
	console.log(req.params);
	request('https://sandbox-api.brewerydb.com/v2/beers/?key=b8a2e919687a3c534e6dc1a804e99765&styleId=' + req.params.styleId, function (error, response, body) {
		res.json(JSON.parse(body).data);
	});
});

server.use('/api', router);

server.listen(process.env.PORT || 5000);
