var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

let port = 3000;

server.listen(port, function() {
    console.log('Server running on port ', port);
})



io.on('connection', function(socket) {
    console.log('User connected, socket info', socket);
})
