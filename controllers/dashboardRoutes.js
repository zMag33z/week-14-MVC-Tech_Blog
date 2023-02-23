// Future note:  reconfigure dashboard handlebar file, and get findall to pull all posts and comments attached to post to place in one section.
//  ATM repetition comments state the same title over and over.  Would rather all comments under one title.

const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const { withAuth, hasAuth } = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
    try {
      const postData = await Post.findAll({
        where: {
          poster_id: req.session.curr_id
        },
        attributes: [
          'id',
          'title',
          'post_text',
          'post_date',
          'poster_id'
        ],
        include: [
          {
            model: User,
            attributes: ['name']
          },
          {
            model: Comment,
            attributes: ['id', 'post_id', 'comment_text', 'commenter_id', 'comment_date'],
            include: [
              {
                model: User,
                attributes: ['name']
              }
            ]
          }
        ]
      });
  
      const commentData = await Comment.findAll({
        where: {
          commenter_id: req.session.curr_id
        },
        attributes: [
          'id',
          'comment_text',
          'comment_date',
          'commenter_id',
          'post_id'
        ],
        include: [
          {
            model: User,
            attributes: ['name']
          },
          {
            model: Post,
            attributes: ['id', 'title', 'post_text', 'post_date', 'poster_id'],
            include: [
              {
                model: User,
                attributes: ['name']
              }
            ]
          }
        ]
      });
      
      let thisURL = '/dashboard';
      const checkURL = thisURL === '/home';

      let current = req.session.curr_id;

      let viewTitle = {
        posts: 'View Your Posts',
        comments: 'View Your Comments'
      }

      const posts = postData.map((project) => project.get({ plain: true }));
      const comments = commentData.map((project) => project.get({ plain: true }));

      res.render('dashboard', {
        checkURL,
        capture: false,
        changes: false,
        current,
        viewTitle,
        posts,
        comments,
        logged_In: req.session.loggedIn,
      }
      );
      //  Insomnia check output
      //  res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;