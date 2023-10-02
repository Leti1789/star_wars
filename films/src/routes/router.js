const {Router} = require("express")
const controller = require("../controllers")


const router = Router()

router.get("/", controller.getFilms);

router.get("/:id", controller.getFilmsId);

router.delete("/:id", controller.deleteFilms);

router.post("/", controller.createFilms);

router.put("/:id", controller.updateFilms);

module.exports = router;