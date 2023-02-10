const { Comment } = require('../models');

const commentData = [
  {
    post_id: 1,
    comment_text: 'I just learned about this in my class!',
    commenter_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;