'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('User', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
          },
          name: {
              type: Sequelize.STRING
          },
          password: {
              type: Sequelize.STRING
          },
          email: {
          type: Sequelize.STRING,
              allowNull: false,
          isEmail: true
          },
          created_at: {
              allowNull: false,
              type: Sequelize.DATE
          },
          updated_at: {
              allowNull: false,
              type: Sequelize.DATE
          }
      });
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('User');
  }
};
