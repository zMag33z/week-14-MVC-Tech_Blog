const User = require('./thisUser');
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
});

Comment.belongsTo(Post, {
    foreignKey:  'post_id',
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