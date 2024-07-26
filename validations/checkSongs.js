const checkCreateValidations= (req, res, next) => {
    if(req.body.songname && req.body.artist){
        return next()
    }else {
        return res.status(404).json({error: "Missing artist or song name please ensure all text is valid"})
    }
}

module.exports = { checkCreateValidations }