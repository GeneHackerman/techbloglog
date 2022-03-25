const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

//create User Model
class User extends Model {
    //setup method to run on user data to check password
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}

//define tables and config
User.init(
    {
        // define id column
        id: {
            // use special sequelize datatypes to provide the data type
            type: DataTypes.INTEGER,
            //SQL "NOT NULL"
            allowNull: false,
            // this is primary key to user
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },
        
            // define username column
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            // define password column
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    // this means password must be minimum 4 chars long
                    len: [4]
                }
            }       
    },
    {
        hooks: {
            // setup beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            // setup beforeDate lifecycle "hook" functionality
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },

        // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

        // pass our imported sequelize connection(direct to the database)
        sequelize,
        // don't auto create createdAt/updatedAt timestamps
        timestamps: false,
        // use underscores
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;