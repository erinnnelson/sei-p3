const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'tackle_db',
  dialect: 'postgres',
  define: {
    underscored: true
  }
});

const User = sequelize.define('user', {
  username: { type: Sequelize.STRING, unique: true },
  email: { type: Sequelize.STRING, unique: true },
  password_digest: Sequelize.STRING
});

const Question = sequelize.define('question', {
  title: Sequelize.STRING,
  topic: Sequelize.STRING,
  question: Sequelize.STRING(2000),
  solved: Sequelize.BOOLEAN
});

const Answer = sequelize.define('answer', {
  answer: Sequelize.STRING(2000),
  verified: Sequelize.BOOLEAN
});

User.hasMany(Question, { onDelete: 'cascade' });
User.hasMany(Answer, { onDelete: 'cascade' });
Question.hasMany(Answer, { onDelete: 'cascade' });
Question.belongsTo(User);
Answer.belongsTo(Question);
Answer.belongsTo(User);

module.exports = {
  sequelize,
  User,
  Question,
  Answer
};