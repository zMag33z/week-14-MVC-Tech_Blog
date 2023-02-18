const { Post } = require('../models');

const postData = [
  {
    title: 'TITLE 1',
    post_text: 'POST TEXT 1',
    poster_id: 1,
  },
  {
    title: 'TITLE 2',
    post_text: 'POST TEXT 2',
    poster_id: 2,
  },
  {
    title: 'TITLE 3',
    post_text: 'POST TEXT 3',
    poster_id: 3,
  },
  {
    title: 'TITLE 4',
    post_text: 'POST TEXT 4',
    poster_id: 4,
  },
  {
    title: 'TITLE 5',
    post_text: 'POST TEXT 5',
    poster_id: 5,
  }
  // {
  //   title: 'Why MVC is so important',
  //   post_text: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
  //   poster_id: 1,
  // },
  // {
  //   title: 'Authentication vs Authorization',
  //   post_text: 'There is a difference between authentication and authorization.  Authentication means confirming your own identity, whereas authorization means being allowed access to the system.',
  //   poster_id: 2,
  // },
  // {
  //   title: 'Object-Relational Mapping',
  //   post_text: 'I have really loved learning about ORMs. It has really simplified the way I create queries in SQL!',
  //   poster_id: 3,
  // }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;