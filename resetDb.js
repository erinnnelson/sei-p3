const { sequelize } = require('./models');

const main = async () => {
  await sequelize.sync({ force: true });
  process.exit();
};

main();