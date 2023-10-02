const Characters = require("../data")


module.exports = async (req,res) => {
    const newCharacter = await Characters.create(req.body);
  res.status(200).json(newCharacter);
}
