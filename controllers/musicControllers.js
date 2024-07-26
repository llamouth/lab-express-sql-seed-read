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
    res.status(201).json(newSong)  
})

music.put("/:id", async (req, res) => {
    const { id } = req.params
    const updatedSong = await updateSong(id, req.body)

    if(updatedSong.id){
        res.status(200).json(updatedSong)
    }else {
        console.log(updatedSong)
        res.status(500).json({ error: "Invalid ID"})
    }
})

music.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deletedSong = await deleteSong(id)
    if(deletedSong.id){
        res.status(200).json({ message : "Success deleting song"})
    }else {
        req.status(500).json({ error : "Internal Server Error"})
    }
})

module.exports = music;