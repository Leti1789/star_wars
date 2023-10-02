const Films = require("../data")


module.exports = async (req,res) => {
    const newFilms = await Films.create(req.body);
  res.status(200).json(newFilms);
}