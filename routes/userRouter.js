const { Router } = require('express');
const { User, Question, Answer } = require('../models');
const { genToken, restrict } = require('../auth');
const bcrypt = require('bcrypt');

const SALT = 7;
const userRouter = Router();

userRouter.route('/')

  .get(async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.json(users);
    }
    catch (e) {
      next(e);
    }
  })

  .post(async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      const check = await User.count({ where: { username: username } })
      debugger;
      if (check === 0) {
        const pwdDigest = await bcrypt.hash(password, SALT);
        const user = await User.create({
          username: username,
          password_digest: pwdDigest,
          email: email
        })
        const { password_digest, ...userData } = user.dataValues;
        const token = genToken(userData);
        res.json({ token, user: userData });
      } else {
        console.log('Username taken');
        res.send('Username taken');
      }
    }
    catch (e) {
      next(e);
    }
  })

userRouter.route('id/:id')

  .get(async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.id, { include: [Question, Answer] });
      res.json(user);
    }
    catch (e) {
      next(e);
    }
  })

userRouter.get('/username/:username', async (req, res) => {
  const user = await User.findOne({ where: { username: req.params.username } });
})


userRouter.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    const isValid = await bcrypt.compare(password, user.password_digest);
    if (isValid) {
      const { password_digest, ...userData } = user.dataValues;
      const token = genToken(userData);
      res.json({ token, user: userData });
    } else {
      res.status(401).send('Tacos burnt: invalid credentials');
    }
  }
  catch (e) {
    console.log(e.message);
    res.status(401).send('Guac is extra!: invalid credentials');
  }
});

userRouter.get('/verify', restrict, (req, res) => {
  res.json({ user: res.locals.user });
});

module.exports = {
  userRouter
};