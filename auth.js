const jwt = require('jsonwebtoken');

const SECRET = 'guacamole';

const genToken = (payload) => {
  const token = jwt.sign(payload, SECRET);
  return token;
};

const restrict = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const user = jwt.verify(token, SECRET);
    res.locals.user = user;
    next();
  }
  catch (e) {
    console.log(e.message);
    res.status(401).send('You are not authorized for these tacos');
  }
};

module.exports = {
  genToken, restrict
};
