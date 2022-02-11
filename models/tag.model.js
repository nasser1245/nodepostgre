module.exports = (sequelize, Sequelize) => {
  const Tag = sequelize.define('tag',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      }
    }, {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  }
  );
  return Tag;
}