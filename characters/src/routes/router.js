const {Router} = require("express")
const controller = require("../controllers")


const router = Router()

router.get("/", controller.getCharacters);

router.get("/:id", controller.getCharactersId);

router.delete("/:id", controller.deleteCharacters);

router.post("/", controller.createCharacters);

router.put("/:id", controller.updateCharacters);

module.exports = router;