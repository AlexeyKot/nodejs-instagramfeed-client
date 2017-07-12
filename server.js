// GRAB THE PACKAGES/VARIABLES WE NEED
// ==================================================
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

// CONFIGURE THE APP
// ================================================== 

// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// configure instagram app with your access token

// SET THE ROUTES
// =================================================== 
// home page route - our profile's images
app.get('/', function(req, res) {
	
	// use the instagram package to get our profile's media 
	// render the home page and pass in our profile's images
	res.render('pages/index');
});

// START THE SERVER
// ==================================================
app.listen(8080);
console.log("App started! Look at http://localhost:8080");