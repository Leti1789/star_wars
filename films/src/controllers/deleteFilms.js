const Films = require("../data");


module.exports = async (req,res) =>{
    const {id} = req.params;
    const film = await Films.delete(id);
    res.status(200).json(film);
}