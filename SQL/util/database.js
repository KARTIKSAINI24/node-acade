const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodesql', 'root', 'FEG@VIga8uv2', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
