module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define('comment',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      text: {
        type: Sequelize.STRING
      },
      tutorialID: {
        type: Sequelize.INTEGER
      }
    }, {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  }
  );
  return Comment;
}