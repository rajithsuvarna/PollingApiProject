//Initializing the models
const Option = require("../models/option");
const Question = require("../models/question");

//For creating the options
module.exports.create = async function (req, res) {
  try {
    const opt = await Option.create({
      option: req.body.content,
      question: req.params.id,
    });
    const updateOpt = await Option.findByIdAndUpdate(opt._id, {
      add_vote: `http://localhost:8000/api/v1/options/${opt._id}/add_vote`,
    });
    updateOpt.save();
    const question = await Question.findById(req.params.id);
    if (question) {
      question.options.push(updateOpt);
      question.save();
      res.send(question);
    } else {
      res.send("Question does not exists");
    }
  } catch (err) {
    console.log(err);
    return;
  }
};

//For adding vote
module.exports.add_vote = async function (req, res) {
  try {
    const option = await Option.findByIdAndUpdate(req.params.id, {
      $inc: { vote: 1 },
    });
    if (option) {
      await option.save();
      res.send(option);
    } else {
      res.send("Option does not exits");
    }
  } catch (err) {
    console.log(err);
    return;
  }
};

//For deleting the option
module.exports.delete = async function (req, res) {
  try {
    const option = await Option.findById(req.params.id);
    if (option) {
      const quesId = option.question;
      const question = await Question.findByIdAndUpdate(quesId, {
        $pull: { options: req.params.id },
      });
      await Option.findByIdAndDelete(req.params.id);

      res.send("Option deleted");
    } else {
      res.send("Id not exists");
    }
  } catch (err) {
    console.log(err);
    return;
  }
};
