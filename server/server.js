const express = require('express')
const app = express()
const server = require('http').createServer(app)

const io = require('socket.io')(server)
let db = require('./data/db.json')

const port = 3001

app.listen(port, function() {
    console.log('backend listening to', port)
})

app.get('/api/playlists', function(req, res) {
    res.status(200).send(db.playlists)
})