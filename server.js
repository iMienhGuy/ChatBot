var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
app.use(session({secret: 'ssshhhh'}));
var mysql      = require('mysql');
var test = [];
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'peter',
  password : '125',
  database : 'mydb'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});




/*var str = "W e l c o m e , U s e r ";
  var arr = str.split(" ");
  console.log(arr);
  */
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
//	res.send(test);

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

app.post('/chat', function (req,res) {
	sess = req.session;
	sess.chat = req.body.log;
	connection.query("SELECT *  FROM Chat", function (err, result, fields) {
    if (err) throw err;
    length = result.length;
    sess.length = length;
    console.log(sess.length);
  });

	var sql = "INSERT INTO Chat (ID, Log) VALUES (sess.length, sess.chat)";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
	console.log(test);
	res.send("Success");

});




app.use('/', router);

app.listen(1337);
console.log('1337 server is working');




