const { Model,Datatypes} = require('sequelize');
const network = require('../config/connetion')

class Post extends Model{}

Post.init(
    {
        body: {
            type: Datatypes.INTEGER,
            allowNull: false,
        }
    }
    {
        sequelize,
    }
)

module.exports = Post;