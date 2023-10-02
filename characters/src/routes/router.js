const {Router} = require("express")
const controller = require("../Constroller")


const router = Router()

route.get("/", controller.getCharacters);

route.get("/:id", controller.getCharacter);

route.delete("/:id", controller.deleteCharacter);

route.post("/", controller.createCharacters);

route.put("/:id", controller.updateCharacter);

module.exports = router;s