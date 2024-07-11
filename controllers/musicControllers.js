const express = require("express");
const music = express.Router();
const { getAllSongs} = require("../queries/tunes")

music.get('/', async (req, res) => {
    const allSongs = await getAllSongs()
    if(allSongs[0]){
        res.status(200).json(allSongs)
    }else {
        res.status(500).json({error: "Internal Server Error"})
    }
})

module.exports = music;