"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      first_name: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },

      last_name: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },

      patronymic: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },

      date_of_birth: {
        allowNull: true,
        type: Sequelize.DATE,
      },

      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },

      password: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },

      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "roles",
          key: "id",
        },
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
