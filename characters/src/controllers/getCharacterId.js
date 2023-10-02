const Characters = require("../data");


module.exports = async (req, res) => {
    const {id} = req.params;
    const characters = await Characters.get(id)
    res.status(200).json(characters);

}