const { DataTypes } = require("sequelize");

const run = (db) => {
    db.define("Test", {
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
    });
};
module.exports = { run };
// `sequelize.define` also returns the model
// console.log(Test === db.models.Test); // true
