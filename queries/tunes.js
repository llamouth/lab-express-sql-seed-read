const db = require("../db/dbConfig")

const getAllSongs = async () => {
    // db.any() -- db is the connection to the database. '.any' is one of the methods that say what kind of data we're expecting to get back. "Any" specifically means we will be happy with ANY kind of data, as in NO data, SOME data, or just ONE piece of data
    try {
        const allSongs =  await db.any('SELECT * FROM songs')
        return allSongs
    }catch(error){
        return error
    }
}

module.exports = { getAllSongs };