const Films = require("../data");


module.exports = async (req, res) =>{
    const film = await Films.update(req.params.id, req.body)
      res.status(200).json(film);
}