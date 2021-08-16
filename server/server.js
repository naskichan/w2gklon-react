const express = require('express')
const app = express()
const server = require('http').createServer(app)

const io = require('socket.io')(server)

const port = 3001

app.listen(port, function() {
    console.log('backend listening to', port)
})