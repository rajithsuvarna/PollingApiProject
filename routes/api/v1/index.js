//setting up the express router
const express = require("express");
const router = express.Router();

//using middleware
router.use("/question", require("./question"));
router.use("/options", require("./option"));

//exporting
module.exports = router;
