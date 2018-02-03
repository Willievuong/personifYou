

var express = require('express');
var app = express();

app.use(express.static('public'))


console.log('Server is starting');
var server = app.listen(3000, listening);
//var port = 3000;

//app.listen(port, listening);

function listening(){
	console.log('Listening at port: ', 3000)
}


//App Settings
//require('./config/express')(app);

//require('./router')(app);

//require('./config/error-handler')(app);

