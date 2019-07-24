const { Router } = require('express');
const { Answer, Question, User } = require('../models');
const { restrict } = require('../auth');

// RESTRICT IS NOT CURRENTLY ENABLED FOR POSTING QUESTIONS OR ANSWERS

const questionRouter = Router();

questionRouter.route('/')

  .get(async (req, res, next) => {
    try {
      const questions = await Question.findAll({ include: [Answer] });
      res.json(questions);
    }
    catch (e) {
      next(e);
    }
  })

questionRouter.route('/:topic')

  .get(async (req, res, next) => {
    try {
      const questions = await Question.findAll({ where: { topic: req.params.topic }, include: [User] })
      res.json(questions);
    }
    catch (e) {
      next(e);
    }
  })

  .post(restrict, (async (req, res, next) => {
    try {
      const user = await User.findByPk(res.locals.user.id);
      // const user = await User.findByPk(1);
      const newQuestion = await Question.create({
        title: req.body.title,
        topic: req.params.topic,
        question: req.body.question,
        solved: false
      });
      const ansUser = await newQuestion.setUser(user);
      console.log(ansUser.dataValues);
      const newQuestionRes = await Question.findByPk(newQuestion.dataValues.id, { include: [User] });
      console.log(newQuestionRes.dataValues);
      res.json(newQuestionRes);
    }
    catch (e) {
      next(e);
    }
  }))

questionRouter.route('/:topic/:question_id')

  .get(async (req, res, next) => {
    try {
      const question = await Question.findByPk(req.params.question_id, {
        include: [
          { model: User },
          {
            model: Answer,
            include: [User]
          }
        ]
      })
      res.json(question);
    }
    catch (e) {
      next(e);
    }
  })

  .put(async (req, res, next) => {
    try {
      await Question.update(req.body, { where: { id: req.params.question_id } })
      const updatedQuestion = await Question.findByPk(req.params.question_id);
      console.log(updatedQuestion.dataValues);
      res.json(updatedQuestion.dataValues);
    }
    catch (e) {
      next(e);
    }
  })

  .delete(async (req, res, next) => {
    try {
      await Question.destroy({ where: { id: req.params.question_id } })
      res.json({
        message: `Question with ID #${req.params.question_id} has been deleted`
      });
    }
    catch (e) {
      next(e);
    }
  })

questionRouter.route('/:topic/:question_id/answers')

  .get(async (req, res, next) => {
    try {
      const answers = await Answer.findAll({ where: { question_id: req.params.question_id } })
      res.json(answers);
    }
    catch (e) {
      next(e);
    }
  })

  .post(restrict, (async (req, res, next) => {
    try {
      const question = await Question.findByPk(req.params.question_id);
      const user = await User.findByPk(res.locals.user.id);
      // const user = await User.findByPk(1);
      const newAnswer = await Answer.create({
        answer: req.body.answer,
        verified: false
      });
      const ansQuest = await newAnswer.setQuestion(question);
      const ansUser = await newAnswer.setUser(user);
      console.log(ansUser.dataValues, ansQuest.dataValues);
      const newAnswerRes = await Answer.findByPk(newAnswer.dataValues.id, { include: [User] });
      console.log(newAnswerRes.dataValues);
      res.json(newAnswerRes);
    }
    catch (e) {
      next(e);
    }
  }))

questionRouter.route('/:topic/:question_id/answers/:id')

  .put(async (req, res, next) => {
    try {
      await Answer.update(req.body, { where: { id: req.params.id } })
      const updatedAnswer = await Answer.findByPk(req.params.id);
      console.log(updatedAnswer.dataValues)
      res.json(updatedAnswer);
    }
    catch (e) {
      next(e);
    }
  })

  .delete(async (req, res, next) => {
    try {
      await Answer.destroy({ where: { id: req.params.id } })
      res.json({
        message: `Answer with ID #${req.params.question_id} has been deleted`
      });
    }
    catch (e) {
      next(e);
    }
  })

module.exports = {
  questionRouter
};