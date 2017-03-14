var Sequelize = require('sequelize');

var sequelize = new Sequelize('tubeviz', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

exports.User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    field: 'first_name'
  },
  location: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true
});

exports.User.sync();
