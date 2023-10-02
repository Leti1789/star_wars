const Films = require("../data");


module.exports = async (req, res) => {
    const {id} = req.params;
    const films = await Films.get(id)
    res.status(200).json(films);

}