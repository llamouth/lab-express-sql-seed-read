const db = require("../db/dbConfig")

const getAllSongsInPlaylist = async (playlist_id) => {
    try {
        const allSongs =  await db.any('SELECT * FROM songs WHERE playlist_id=$1', playlist_id)
        return allSongs
    }catch(error){
        return error
    }
}

const getSingleSongInPlaylist = async (id) => {
    try {
        const singleSong = db.one("SELECT * FROM songs WHERE id=$1", id)
        return singleSong
    } catch (error) {
        return error
    }
}

const createSongWithPlaylist = async (song) => {
    const { songname, artist, genre, is_favorite, album, playlist_id} = song
    try {
        const newSong = db.one("INSERT INTO songs (songname, artist, genre, is_favorite, album, playlist_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [songname, artist, genre, is_favorite, album, playlist_id]);
        return newSong       
    } catch (error) {
        return error
    }
}

const updateSongInPlaylist = async (song) => {
    const { id ,songname, artist, genre, is_favorite, album, playlist_id} = song
    try {
        const updatedSong = await db.one("UPDATE songs SET songname=$1, artist=$2, genre=$3, is_favorite=$4, album=$5, playlist_id=$6 WHERE id=$7 RETURNING *", [songname, artist, genre, is_favorite,album, playlist_id, id ])
        return updatedSong
    } catch (error) {
        return error
    }
}

module.exports = { getAllSongsInPlaylist, getSingleSongInPlaylist, createSongWithPlaylist, updateSongInPlaylist }