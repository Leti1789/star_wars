const Planets = require("../data")


module.exports = async (req,res) => {
    const newPlanet = await Planets.create(req.body);
  res.status(200).json(newPlanet);
}
