const fs = require('fs')
const db = require('./db.json')

module.exports = {

    getPlaylists: function () {
        return db.playlists
    },
    getPlaylistById: function (id) {
        return db.playlists[id]
    },
    addVideoToPlaylist: function (playlist, video) {
        let response = 'error'
        console.log('someone writes a video in playlist', playlist, 'video content', video)
        db.playlists.forEach((obj) => {
            if (obj.uuid === playlist) {
                obj.videos.push(video)
                response = obj.videos
            }
        })
        fs.writeFileSync('./server/data/db.json', JSON.stringify(db))
        return response
    }
}

//TODO: For deleting i need uuids maybe as multiple videos with the same id can exist
