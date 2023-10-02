const Planets = require("../data");


module.exports = async (req, res) => {
    const {id} = req.params;
    const planets = await Planets.get(id)
    res.status(200).json(planets);

}