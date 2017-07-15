// GRAB THE PACKAGES/VARIABLES WE NEED
// ==================================================
const express = require('express');
const app = express();
const ig = require('instagram-node').instagram();
//just replace value of the const below with your instagram access token
const apikey = require('./apikey').key;

// CONFIGURE THE APP
// ================================================== 

// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// configure instagram app with your access_token
ig.use({
// get access token here: http://instagram.pixelunion.net/
access_token: apikey, });

// SET THE ROUTES
// =================================================== 
// home page route - our profile's images
app.get('/', function(req, res) {
	
	// use the instagram package to get popular media
	ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) { 
	
		// render the home page and pass in the popular images 
		res.render('pages/index', { grams: medias });
	});
});

// START THE SERVER
// ==================================================
app.listen(8080);
console.log("App started! Look at http://localhost:8080");