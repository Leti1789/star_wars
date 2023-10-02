const Characters = require("../data");


module.exports = async (req, res) =>{
    const character = await Characters.update(req.params.id, req.body)
      res.status(200).json(character);
}