//setting up the express router
const express = require("express");
const router = express.Router();
const questionController = require("../../../controllers/question_controller");

router.post("/create", questionController.create);
router.get("/view/:id", questionController.showDetails);
router.delete("/delete/:id", questionController.deleteQues);

//using middleware
router.use("/options", require("./option"));

//exporting
module.exports = router;
