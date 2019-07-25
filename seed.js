const { User, Question, Answer } = require('./models')

const main = async () => {

  await User.destroy({ where: {}, });
  await Question.destroy({ where: {}, });
  await Answer.destroy({ where: {}, });

  const alex = await User.create({
    username: 'Alex',
    email: 'alex@ga.com',
    password_digest: 'bljuq764'
  });

  const ana = await User.create({
    username: 'Ana',
    email: 'ana@ga.com',
    password_digest: '8752tdhj'
  });

  const francine = await User.create({
    username: 'Francine',
    email: 'francine@ga.com',
    password_digest: 'kjbrmq98'
  });

  const erinn = await User.create({
    username: 'Erinn',
    email: 'erinn@ga.com',
    password_digest: 'liuafto87t'
  });

  const question1 = await Question.create({
    title: 'Unique STRING in Sequelize model',
    topic: 'sql',
    question: "I am trying to make a model for users in postGres and I don't know to mkae it so that there aren't any duplicates.",
    solved: false
  });

  const question2 = await Question.create({
    title: 'Gaurd operator',
    topic: 'css',
    question: "How does the gaurd operator work? Can someone give me some examples?",
    solved: false
  });

  const question3 = await Question.create({
    title: 'The meaning of life...?',
    topic: 'css',
    question: "It’s long been rumored that the chupacabra is really just a crazed man who’s local taco shop went out of business?",
    solved: false
  });

  const question4 = await Question.create({
    title: "Life's many mysteries",
    topic: 'html',
    question: "Every day is taco ipsum tuesday. Fish tacos: lettuce or cabbage, pico de gallo, avocado and a sour cream or citrus/mayonnaise sauce, all placed on top of a corn or flour tortilla. Um, Tabasco? No thanks, do you have any Cholula? Does guac cost extra?",
  });

  const question5 = await Question.create({
    title: "I don't know what to write",
    topic: 'react',
    question: "I’d have to say, those tacos are on fleek. Tacos al pastor made with adobada meat. Tacos al pastor made with?",
    solved: false
  });

  const answer1 = await Answer.create({
    answer: "Make it a double there pal. Tacos al pastor made with adobada meat. I’ve been following that taco truck around all day. Shrimp tacos are tasty tacos! Burritos are very tasty. Fish tacos: lettuce or cabbage, pico de gallo, avocado and a sour cream or citrus/mayonnaise sauce, all placed on top of a corn or flour tortilla. These tacos are lit 🔥",
    verified: false
  });

  const answer2 = await Answer.create({
    answer: "I’d have to say, those tacos are on fleek. Tacos, again? This will be 5 times this week and it’s only Tuesday.",
    verified: false
  });

  const answer3 = await Answer.create({
    answer: "Tabasco? No thanks, do you have any Cholula? Yeah, apparently the taco shack was robbed. They left the money but took the tacos. Does guac cost extra? These tacos are lit 🔥. Yeah, apparently the taco shack was robbed.",
    verified: false
  });

  const answer4 = await Answer.create({
    answer: "Every day is taco ipsum tuesday. Fish tacos: lettuce or cabbage, pico de gallo, avocado and a sour cream or citrus/mayonnaise sauce, all placed on top of a corn or flour tortilla. Um, Tabasco? No thanks, do you have any Cholula?",
    verified: false
  });

  const answer5 = await Answer.create({
    answer: "again? This will be 5 times this week and it’s only Tuesday. It’s long been rumored that the chupacabra is really just a crazed man who’s local taco shop went out of business. How bout a gosh ",
    verified: false
  });

  const answer6 = await Answer.create({
    answer: "Yeah, apparently the taco shack was robbed. They left the money but took the tacos. Does guac cost extra? These tacos are lit 🔥. Yeah, apparently the taco shack was robbed. They left the money but took the tacos.",
    verified: false
  });

  const answer7 = await Answer.create({
    answer: "You are wrong.",
    verified: false
  });

  await question1.setUser(alex);
  await question2.setUser(ana);
  await question3.setUser(francine);
  await question4.setUser(erinn);
  await question5.setUser(alex);

  await answer1.setUser(ana);
  await answer2.setUser(erinn);
  await answer3.setUser(erinn);
  await answer4.setUser(alex);
  await answer5.setUser(francine);
  await answer6.setUser(francine);
  await answer7.setUser(ana);

  await answer1.setQuestion(question1);
  await answer2.setQuestion(question1);
  await answer3.setQuestion(question3);
  await answer4.setQuestion(question3);
  await answer5.setQuestion(question3);
  await answer6.setQuestion(question4);
  await answer7.setQuestion(question5);
};

main();