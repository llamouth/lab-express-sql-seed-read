const db = require("../db/dbConfig")

const getAllSongs = async () => {
    try {
        const allSongs =  await db.any('SELECT * FROM songs')
        return allSongs
    }catch(error){
        return error
    }
}

const getSong = async (id) => {
    try {
        const oneSong = await db.one('SELECT * FROM songs WHERE id=$1', id)
        return oneSong
    } catch (error) {
        return error
    }
}

const createSong = async (song) => {
    try {
        const newSong = db.one("INSERT INTO songs (artist ,songName, is_favorite) VALUES ($1, $2, $3) RETURNING *", [song.artist, song.songName, song.is_favorite]);
        return newSong       
    } catch (error) {
        return error
    }
}

module.exports = { getAllSongs, getSong, createSong };