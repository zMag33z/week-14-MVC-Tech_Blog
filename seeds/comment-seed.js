const { Comment } = require('../models');

const commentData = [
  {
    post_id: 1,
    comment_text: 'I just learned about this in my class!',
    commenter_id: 2
  },
  {
    post_id: 1,
    comment_text: 'Same here.  It was a very interesting subject.',
    commenter_id: 3
  },
  {
    post_id: 2,
    comment_text: 'This was very enlightening.  I can now see class objects and models from a new angle.',
    commenter_id: 1
  },
  {
    post_id: 3,
    comment_text: 'Comment Seed Number 4.',
    commenter_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;