const db = require("../db/dbConfig")

const getAllSongs = async () => {
    try {
        const allSongs =  await db.any('SELECT * FROM songs ORDER BY id')
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
    const { songname, artist, genre, is_favorite, album} = song
    try {
        const newSong = db.one("INSERT INTO songs (songname, artist, genre, is_favorite, album) VALUES ($1, $2, $3, $4, $5) RETURNING *", [songname, artist, genre, is_favorite, album]);
        return newSong       
    } catch (error) {
        return error
    }
}

const updateSong = async (id, song) => {

    const {songname, artist, genre, album, is_favorite} = song;
    
    try {
        const updatedSong = await db.one("UPDATE songs SET songname=$1, artist=$2, genre=$3, is_favorite=$4, album=$5 WHERE id=$6 RETURNING *", [songname, artist, genre, is_favorite,album, id ])
        return updatedSong
    } catch (error) {
        return error
    }
}

const deleteSong = async (id) => {
    try {
        const deletedSong = await db.one("DELETE FROM songs WHERE id=$1 RETURNING *", id)
        return deletedSong
    } catch (error) {
        return error
    }
}
module.exports = { getAllSongs, getSong, createSong, updateSong, deleteSong };