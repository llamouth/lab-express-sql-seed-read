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

const updateSong = async (id, song) => {
    const {songname, artist, album, time, is_favorite} = song
    try {
        const updatedSong = await db.one("UPDATE songs SET songname=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6", [songname, artist, album, time, is_favorite, id ])
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