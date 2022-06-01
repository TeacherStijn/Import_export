"use strict";

/* Express web server instellen */
const express = require('express');
const server = express();

const cors = require('cors');
server.use(cors());
server.options('*', cors());	// voor nu even helemaal open zetten

const LOCAL_PORT = "1234";


// STATIC FILES HOSTEN:
server.get(['/','/start.html'], function(request, response) {
    console.log('Get of /');
	
	response.sendFile(__dirname + '/start.html');
});

server.get(['/','/character.js'], function(request, response) {
    console.log('Get of /');
	
	response.sendFile(__dirname + '/character.js');
});

server.get(['/','/game.js'], function(request, response) {
    console.log('Get of /');
	
	response.sendFile(__dirname + '/game.js');
});

/* Webserver starten */
server.listen(LOCAL_PORT, function() {
    console.log('Server started!');	
});