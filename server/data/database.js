const { Sequelize } = require("sequelize");
const { callModels } = require("../models");
const db = new Sequelize("cms", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

callModels(db);

module.exports = db;
//call models
