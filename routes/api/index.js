//setting up the express router
const express = require("express");
const router = express.Router();

//using middleware
router.use("/v1", require("./v1/index"));

//exporting
module.exports = router;
