const express = require("express");
const music = express.Router();
const { getAllSongs, getSong, createSong } = require("../queries/tunes")
const { checkCreateValidations } = require("../validations/checkSongs")

music.get('/', async (req, res) => {
    const allSongs = await getAllSongs()
    if(allSongs[0]){
        res.status(200).json(allSongs)
    }else {
        res.status(500).json({error: "Internal Server Error"})
    }
})

music.get('/:id', async (req, res) => {
    const { id } = req.params
    const song = await getSong(id)

    if(song.id) {
        res.status(200).json(song)
    }else {
        res.status(500).json({error: "Internal Srver error"})
    }
})

music.post("/", checkCreateValidations, async (req, res) => {
    const newSong = await createSong(req.body)
    res.status(200).json(newSong) 
})

module.exports = music;