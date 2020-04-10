var express = require('express'),
	http = require('http'),
	path = require('path'),
	routes = require('./routes'),
	app = express();

//middleware
app.use('/html5game', express.static('C:/Users/alexd/Documents/BloodGameHTML/html5game'));
app.use(express.urlencoded({
	extended: true
}));
app.use(express.json());
app.use('/', routes);

//set value
app.set('port', process.env.PORT || 8000);

//fail states
app.use((req, res, next) => {
	res.status(404).send("Sorry, doesn't seem to be anything there!");
});

app.use((err, req, res, next) => {
  if (err) console.log('ERR: ' + err.stack);
  res.status(500).send('Something broke!');
});

var httpServer = app.listen(app.get('port'), function() {
	console.info('Server running on local port ' + app.get('port'));
});