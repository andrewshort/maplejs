var express = require('express');
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

server.use('/api', router);

server.listen(process.env.PORT || 5000);
