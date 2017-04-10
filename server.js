var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
//var bootstrap = require('bootstrap');

var str = "W e l c o m e , U s e r ";
  var arr = str.split(" ");
  console.log(arr);
// make the css files public
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var router = express.Router();



// sends index.html file to homepage 
app.get('/', function(req, res) {
	//use double quotes because single quotes dont work
	//res.sendFile(path.join(__dirname + "/public/index.html"));
	res.sendFile(path.join(__dirname + "/index.html"));

});
// route middleware
router.use(function(req, res, next) {
	//log each request to console
	console.log(req.method, req.url);
	//contine doing what we were doing and go to route
	next();

});


app.get('/chat', function(req, res) {
	//res.sendFile(path.join(__dirname + "/public/chat.html"));
	res.sendFile(path.join(__dirname + "/chat.html"));
});



app.post('/login',function(req, res) {
	
	var sess = req.body;

	console.log(sess.username);
	if(sess.username.length > 0) {
		res.status(200);
		  res.end(JSON.stringify(sess));


	}
	else {
		res.status(400);
		res.send("Fail");
	}
	
	
	
});


app.use('/', router);

app.listen(1337);
console.log('1337 server is working');
