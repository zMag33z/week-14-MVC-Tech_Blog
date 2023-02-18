const { Comment } = require('../models');

const commentData = [
  {
    post_id: 1,
    comment_text: 'COMMENT-1 TO POST-1 COMMENTER-2',
    commenter_id: 2
  },
  {
    post_id: 2,
    comment_text: 'COMMENT-1 TO POST-2 COMMENTER-1',
    commenter_id: 1
  },
  {
    post_id: 3,
    comment_text: 'COMMENT-1 TO POST-3 COMMENTER-5',
    commenter_id: 5
  },
  {
    post_id: 4,
    comment_text: 'COMMENT-1 TO POST-4 COMMENTER-3',
    commenter_id: 3
  },
  {
    post_id: 5,
    comment_text: 'COMMENT-1 TO POST-5 COMMENTER-4',
    commenter_id: 4
  },
  {
    post_id: 1,
    comment_text: 'COMMENT-2 TO POST-1 COMMENTER-4',
    commenter_id: 4
  },
  {
    post_id: 2,
    comment_text: 'COMMENT-1 TO POST-2 COMMENTER-5',
    commenter_id: 5
  },
  // {
  //   post_id: 1,
  //   comment_text: 'I just learned about this in my class!',
  //   commenter_id: 2
  // },
  // {
  //   post_id: 1,
  //   comment_text: 'Same here.  It was a very interesting subject.',
  //   commenter_id: 3
  // },
  // {
  //   post_id: 2,
  //   comment_text: 'This was very enlightening.  I can now see class objects and models from a new angle.',
  //   commenter_id: 1
  // },
  // {
  //   post_id: 3,
  //   comment_text: 'Comment Seed Number 4.',
  //   commenter_id: 1
  // }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;