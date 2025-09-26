"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    const [role] = await queryInterface.sequelize.query(
      "SELECT id FROM roles WHERE role = 'admin' LIMIT 1",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    await queryInterface.bulkInsert("users", [
      {
        first_name: "System",
        last_name: "Administrator",
        email: "admin@example.com",
        password:
          "$2b$05$EreolyT49sz4Eeh.FMi9d.ocwE5/vgARladReIdUgT//WOOabBXwO",
        is_active: true,
        role_id: role.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", { email: "admin@example.com" });
  },
};
