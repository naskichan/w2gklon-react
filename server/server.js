const express = require('express')
const app = express()
const server = require('http').createServer(app)
const cors = require('cors')
const isDev = process.env.NODE_ENV === "development"
console.log(isDev)
const io = require('socket.io')(server)
let db = require('./data/db.json')

const port = 3001

if(isDev) {
    console.log('im in dev mode so ill allow all cors requests')
    app.use(cors());
}

app.listen(port, function() {
    console.log('backend listening to', port)
})

app.get('/api/playlists', function(req, res) {
    res.send(db.playlists)
})