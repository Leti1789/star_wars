const {Router} = require('express')


const router = Router();

router.use("/character", require("./router") )

module.exports = router;