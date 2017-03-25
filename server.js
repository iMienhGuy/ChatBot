var express = require('express');
var app = express();
var path = require('path');


// make the css files public
app.use(express.static('public'));

var router = express.Router();

// sends index.html file to homepage 
app.get('/', function(req, res) {
	//use double quotes because single quotes dont work
	res.sendFile(path.join(__dirname + "/public/index.html"));

});

app.get('/test', function(req, res) {
	res.send("This is a test");
});

app.use('/', router);

app.listen(1337);
console.log('1337 server is working');

