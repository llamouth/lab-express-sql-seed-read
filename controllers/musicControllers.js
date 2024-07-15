const express = require("express");
const music = express.Router();
const { getAllSongs, getSong, createSong, updateSong, deleteSong } = require("../queries/tunes")
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

music.post("/:id", async (req, res) => {
    const { id } = req.params
    const updatedSong = await updateSong(id, req.body)

    if(updatedSong.id){
        res.status(200).json(updatedSong)
    }else {
        res.status(500).json({ error: "Invalid ID"})
    }
})

music.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deletedSong = await deleteSong(id)
    res.status(200).json(deletedSong)
})

module.exports = music;