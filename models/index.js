const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {

});

Comment.belongsTo(User, {

});

Comment.belongsTo(Post, {

});

User.hasMany(Comment, {

});

User.hasMany(Post, {

});

Post.hasMany(Comment, {

});
