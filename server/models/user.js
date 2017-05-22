'use strict';
module.exports = function(sequelize, DataTypes) {
    console.log("inside the model #####");
    var User = sequelize.define('User', {
        name: {type: DataTypes.STRING},
        password: {type: DataTypes.STRING},
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{isEmail: true}

        }
    }, {
        underscored: true,
        freezeTableName: true,
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return User;
};