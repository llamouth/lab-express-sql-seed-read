const express = require("express")
const playlist = express.Router()
const { getAllPlaylist, getSinglePlaylist, createPlaylist, updatePlaylist, deletePlaylist } = require("../queries/playlists")
const playlistMusicController = require("./playlistMusicController")

playlist.use("/:playlist_id/music", playlistMusicController)

playlist.get("/", async (req, res) => {
    const allPlaylist = await getAllPlaylist()
    res.status(200).json(allPlaylist)
});

playlist.get("/:id", async (req, res) => {
    const { id } = req.params
    const singlePlaylist = await getSinglePlaylist(id)
    res.status(200).json(singlePlaylist)
})

playlist.post("/", async (req, res) => {
    const newPlaylist = await createPlaylist(req.body)
    res.status(200).json(newPlaylist)
})

playlist.put("/:id", async (req, res) => {
    const { id } = req.params
    const updatedPlaylist = await updatePlaylist(id, req.body)
    res.status(200).json(updatedPlaylist)
})

playlist.delete("/:id", async (req, res) => {
    const { id } = req.params
    const thePlaylist = await deletePlaylist(id)
    res.status(200).json(thePlaylist)
})

module.exports = playlist