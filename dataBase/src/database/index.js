const mongoose = require("mongoose")
const {MONGO_URI} =require("../config/envs")

const conn = mongoose.createConnection(MONGO_URI);

// const Planets = conn.model("Planet", require("./schema/planetsSchema"));
// const Film = conn.model("Film", require("./schema/filmsSchema"));
// const Character = conn.model("Character", require("./schema/charactersSchema"));

// Character.find()
//     .populate("films",["_id","title"])
//     .populate("homeworld")
//     .then((res)=> console.log(res[0]))
//Film.find().then((res)=> console.log(res))
//Planets.find().then((res)=> console.log(res))

module.exports={
    Character:conn.model("Character", require("./schemas/characterSchema")),
     Film: conn.model("Film", require("./schemas/filmSchema")),
     Planet: conn.model("Planet", require("./schemas/planetSchema"))
}









