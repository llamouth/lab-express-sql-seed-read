const express = require("express");
const playlistMusic = express.Router({ mergeParams: true });
const { getAllSongsInPlaylist, getSingleSongInPlaylist, createSongWithPlaylist, updateSongInPlaylist } = require("../queries/playlistMusic")
const { getSinglePlaylist } = require("../queries/playlists")

playlistMusic.get("/", async (req, res) => {
    const { playlist_id } = req.params
    const playlistSongs = await getAllSongsInPlaylist(playlist_id)
    const playlist = await getSinglePlaylist(playlist_id)
    res.status(200).json({ ...playlist, playlistSongs})
})

playlistMusic.get("/:id", async (req, res) => {
    const { playlist_id, id } = req.params
    const singleSong = await getSingleSongInPlaylist(id)
    const playlist = await getSinglePlaylist(playlist_id)
    res.status(200).json({ ...playlist, singleSong})
})

playlistMusic.post("/", async (req, res) => {
    const { playlist_id } = req.params
    const playlist = await getSinglePlaylist(playlist_id)
    await createSongWithPlaylist({playlist_id, ...req.body})

    const playlistSongs = await getAllSongsInPlaylist(playlist_id)

    res.status(200).json({...playlist, playlistSongs})
})

playlistMusic.put("/:id", async (req, res) => {
    const { playlist_id, id } = req.params
    const updatedSong = await updateSongInPlaylist({playlist_id, id, ...req.body})
    res.status(200).json(updatedSong)
})

module.exports = playlistMusic;