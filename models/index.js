const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
comments = require("./comment.model.js")(sequelize, Sequelize);
tags = require("./tag.model.js")(sequelize, Sequelize);
tutorials.hasMany(comments, { as: "comments", foreignKey: "tutorialID" });

tutorials.belongsToMany(tags, {
    through: "tutorial_tag",
    as: "tags",
    foreignKey: "tutorial_id",
});

tags.belongsToMany(tutorials, {
    through: "tutorial_tag",
    as: "tutorials",
    foreignKey: "tag_id"
});

db.tutorials = tutorials;
db.comments = comments;
db.tags = tags;
module.exports = db;

