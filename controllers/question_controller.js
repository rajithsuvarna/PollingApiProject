//Initializing the models
const Question = require("../models/question");
const Option = require("../models/option");

//For creating the questions
module.exports.create = async function (req, res) {
  try {
    let question = await Question.create(req.body);
    res.send(question);
  } catch (err) {
    console.log(err);
    return;
  }
};

//For showing the question by its id
module.exports.showDetails = async function (req, res) {
  try {
    console.log(req.params.id);
    const question = await Question.findById(req.params.id).populate("options");
    if (question) {
      res.send(question);
    } else {
      res.send("Id does not exits");
    }
  } catch (err) {
    console.log(err);
    return;
  }
};

//To delete a perticular Question and associated options by its Id
module.exports.deleteQues = async function (req, res) {
  try {
    const question = await Question.findById(req.params.id).clone();
    if (question) {
      await Question.deleteOne(req.params.id).clone();
      await Option.deleteMany({ question: req.params.id }).clone();
      res.send("Question deleted");
    } else {
      res.send("Question does not exists");
    }
  } catch (err) {
    console.log(err);
    return;
  }
};
