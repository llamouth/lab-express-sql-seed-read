const playlist = require("../controllers/playlistController")
const db = require("../db/dbConfig")

const getAllPlaylist = async () => {
    try {
        const allPlaylist = await db.any('SELECT * FROM playlists')
        return allPlaylist
    } catch (error) {
        return error
    }
}

const getSinglePlaylist = async (id) => {
    try {
        const singlePlaylist = await db.one("SELECT * FROM playlists WHERE id=$1", id)
        return singlePlaylist
    } catch (error) {
        return error
    }
}

const createPlaylist = async (playlist) => {
    const { playlist_name, playlist_genre } = playlist
    try {
        const newPlaylist = await db.one("INSERT INTO playlists (playlist_name, playlist_genre) VALUES ($1, $2) RETURNING *", [playlist_name, playlist_genre])
        return newPlaylist
    } catch (error) {
        
    }
}

const updatePlaylist = async (id, playlist) => {
    const { playlist_name, playlist_genre } = playlist
    try {
        const updatedPlaylist = await db.one("UPDATE playlists SET playlist_name=$1, playlist_genre=$2 WHERE id=$3 RETURNING *", [playlist_name, playlist_genre, id])
        return updatedPlaylist
    } catch (error) {
        return error
    }
}

const deletePlaylist = async (id) => {
    try {
        const thePlaylist = await db.one("DELETE FROM playlists WHERE id=$1 RETURNING *", id)
        return thePlaylist
    } catch (error) {
        return error
    }
}

module.exports = { getAllPlaylist, getSinglePlaylist, createPlaylist, updatePlaylist, deletePlaylist }