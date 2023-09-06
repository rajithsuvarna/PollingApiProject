//setting up the express router
const express = require("express");
const router = express.Router();
const optionsController = require("../../../controllers/option_controller");

router.post("/:id/create", optionsController.create);
router.get("/:id/add_vote", optionsController.add_vote);
router.delete("/delete/:id", optionsController.delete);

//exporting
module.exports = router;
