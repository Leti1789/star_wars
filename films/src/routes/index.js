const {Router} = require('express')


const router = Router();

router.use("/film", require("./router") )

module.exports = router;