const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const isDev = process.env.NODE_ENV === "development"
const axios = require('axios')
const cors = require('cors')
let db = require('./data/db')
let credentials = require('./data/credentials.json')

const port = 3001

if(isDev) {
    console.log('im in dev mode so ill allow all cors requests')
    app.use(cors());
}

io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('disconnect', (data) => {
        console.log('they went off..')
    })
})

app.listen(port, function() {
    console.log('backend listening to', port)
})

app.get('/api/playlists', function(req, res) {
    res.send(db.getPlaylists())
    
})
//Make proper validation pls!
app.post('/api/playlistEntry', function(req, res) {
    fetchVideoInfo(req.query.videoId).then((apires) => {
        const item = apires.data.items[0]
        const video = {
            "id": item.id,
            "title": item.snippet.title,
            "channelTitle": item.snippet.channelTitle
        }
        console.log('video info is there', video)
        const response = db.addVideoToPlaylist(req.query.playlist, video)
        res.send(response)

    })
})
app.get('/api/getVideoInfo', function(req, res) {
    fetchVideoInfo(req.query.videoId).then((apires) => {
        res.send( {
            "id": apires.data.items[0].id,
            "title": apires.data.items[0].snippet.title,
            "channelTitle": apires.data.items[0].snippet.channelTitle
        })
    })
})

async function fetchVideoInfo(videoId) {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${credentials.apikey}`
    console.log(url)
    return await axios(url)
}
