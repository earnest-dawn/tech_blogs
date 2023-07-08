const { Model, Datatypes} = require('sequelize');
const bcrypt = require('bcrypt');
const network = require('../DEVELOP/config/connetion');
const { seq } = require('neo-async');

class Account extends Model {
  authentication(input) {
    return bcrypt.compareSync(input, this.password)
}
  
}



Account.init(
    {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userName: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        password: {
            type: Datatypes.INTEGER,
            allowNul: false,
            validate: {
                len: [8]
            },
        },
    }
    {
        hooks: {
            beforeCreate: async (newUser) => {
                newUser.password = await bcrypt.hash(newUser.password, 10);
                return newUser;
            },
            beforeUpdate: async (uodatedUser) => {
                updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
            },
        }
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'Account'
    }
)

module.exports = Account;