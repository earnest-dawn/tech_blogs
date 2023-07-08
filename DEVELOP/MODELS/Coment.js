const { Model, Datatypes } = require('sequelize');
const network = require('../DEVELOP/config/connetion');

class Comment extends Model {}

Comment.intit(
    {
        body: {
            type Datatypes.STRING,
            allowNull: false,
        },
        {sequelize},
    });

    module.exports = Comment;