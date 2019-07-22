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
      const questions = await Question.findAll({ where: { topic: req.params.topic }, include: [Answer] });

      res.json(questions);
    }
    catch (e) {
      next(e);
    }
  })

  .post(async (req, res, next) => {
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
      res.json(newQuestion);
    }
    catch (e) {
      next(e);
    }
  })

questionRouter.route('/:topic/:question_id')

  .get(async (req, res, next) => {
    try {
      const question = await Question.findByPk(req.params.question_id, { include: [Answer] })

      res.json(question);
    }
    catch (e) {
      next(e);
    }
  })

questionRouter.route('/:topic/:question_id/answers')

  .get(async (req, res, next) => {
    try {
      const answers = await Answer.findAll({ where: {question_id: req.params.question_id} })
      res.json(answers);
    }
    catch (e) {
      next(e);
    }
  })

  .post(async (req, res, next) => {
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
    res.json(newAnswer);
    }
    catch (e) {
      next(e);
    }
  })

module.exports = {
  questionRouter
};