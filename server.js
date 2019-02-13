var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
app.use(session({secret: 'ssshhhh'}));
var mysql = require('mysql');
var Chat = require('./models/Chat');

var db = require('./db');

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });




// make the css files public
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var router = express.Router();

 

// sends index.html file to homepage 
app.get('/', function(req, res) {
	//use double quotes because single quotes dont work
	res.sendFile(path.join(__dirname + "/public/index.html"));

});
// route middleware
router.use(function(req, res, next) {
	//log each request to console
	console.log(req.method, req.url);
	//contine doing what we were doing and go to route
	next();

});

app.get('/chat', function(req, res) {
	res.sendFile(path.join(__dirname + "/public/chat.html"));



});

app.get('/chatLog',function(req,res) {
	 Chat.findAll().then(chat => {
  		console.log(chat);
  		res.send(chat);
	})
});

app.get('/login', function(req, res) {
	sess = req.session;
	res.send(sess.username);


});

var sess;
app.post('/login',function(req, res) {
	sess = req.session;
	sess.username = req.body.username;

	console.log(sess.username);
	if(sess.username.length > 0) {
		res.status(200);
		  res.end("Success");


	}
	else {
		res.status(400);
		res.send("Fail");
	}
	
});

app.post('/post', function (req,res) {

	sess = req.session;
	sess.chat = req.body.log;
	Chat.create({ Log: sess.chat, Name: sess.username }).then(chat => {
		console.log("1 record inserted");
		res.status(200);
	 	res.send("Success");
  		
	})

});




app.use('/', router);

app.listen(1337);
console.log('1337 server is working');




