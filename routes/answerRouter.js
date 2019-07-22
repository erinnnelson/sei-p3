const { Router } = require('express');
const { Answer, Question, User } = require('../models');
const { restrict } = require('../auth');

const answerRouter = Router();

answerRouter.post('/question/:id', async (req, res) => {
  try {
    const answer = await Answer.create(req.body);
    // const user = await User.findByPk(res.locals.user.id);
    const question = await Question.findByPk(req.params.id);
    const user = await User.findByPk(1);
    const ansUser = await answer.setUser(user);

    const ansQuest = await answer.setQuestion(question);
    console.log(ansUser.dataValues, ansQuest.dataValues);
    res.json({ answer });
  }
  catch (e) {
    console.log(e.message);
    res.status(401).send("Cold tacos, can't post :( ");
  }
})

module.exports = {
  answerRouter
};
