const Planets = require("../data");


module.exports = async (req,res) =>{
    const {id} = req.params;
    const planet = await Planets.delete(id);
    res.status(200).json(planet);
}