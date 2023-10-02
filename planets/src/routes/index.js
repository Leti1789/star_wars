const {Router} = require('express')


const router = Router();

router.use("/planet", require("./router") )

module.exports = router;