const {Router} = require("express")
const controller = require("../controllers")


const router = Router()

router.get("/", controller.getPlanets);

router.get("/:id", controller.getPlanetsId);

router.delete("/:id", controller.deletePlanets);

router.post("/", controller.createPlanets);

router.put("/:id", controller.updatePlanets);

module.exports = router;