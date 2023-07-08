const Post = require('./Post');
const Comment = require('./Coment');
const Account = require('./Account');

Post.belongsTo(Account. {
    foreignKey: 'accountId',
    onDelete: 'CASCADE'
})

Post.hasMany(Comment {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
    foreignKey: 'accountId',
    onDelete: 'CASCADE'
})

module.exports = { Account,Post, Comment}