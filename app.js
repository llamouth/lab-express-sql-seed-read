const express = require("express");
const cors = require("cors");
const app = express();
const musicController = require("./controllers/musicControllers")

// Middleware
app.use(express.json());
app.use(cors());
app.use("/music", musicController)

app.get("/", (req, res) => {
    res.send("Welcome to Tuner!")
})

app.get("*", (req, res) => {
    res.status(404).send("Page not found")
})

module.exports = app;