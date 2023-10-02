const Planets = require("../data");


module.exports = async (req, res) =>{
    const planets = await Planets.update(req.params.id, req.body)
      res.status(200).json(planets);
}