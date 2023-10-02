const Characters = require("../data");


module.exports = async (req,res) =>{
    const {id} = req.params;
    const character = await Characters.delete(id);
    res.status(200).json(character);
}