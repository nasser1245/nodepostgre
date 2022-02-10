module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      },

    }, {
      timestamps: false,
      createdAt: false,
      updatedAt: false,

    });
    return Tutorial;
  };