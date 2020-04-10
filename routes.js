var express = require('express'),
	router = express.Router();

router.get('/', function(req, res) {
	res.redirect('/index.html');
});

router.get('/index.html', function(req, res) {
	res.sendFile('/index.html', {'root': 'C:/Users/alexd/Documents/BloodGameHTML/'});
});

module.exports = router;