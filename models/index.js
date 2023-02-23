const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
    foreignKey: 'poster_id',
    onDelete: 'cascade',
});

User.hasMany(Post, {
    foreignKey: 'poster_id',
    onDelete: 'cascade',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
});

Comment.belongsTo(User, {
    foreignKey: 'commenter_id',
    onDelete: 'SET NULL',
});

Comment.belongsTo(Post, {
    foreignKey:  'post_id',
    onDelete: 'SET NULL',
});

User.hasMany(Comment, {
    foreignKey: 'commenter_id',
    onDelete: 'cascade',
});

module.exports = {
    User,
    Post,
    Comment
};