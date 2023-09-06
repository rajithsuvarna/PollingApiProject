//setting up the express router
const express = require("express");
const router = express.Router();

//using middleware
router.use("/api", require("./api/index"));

//exporting
module.exports = router;
