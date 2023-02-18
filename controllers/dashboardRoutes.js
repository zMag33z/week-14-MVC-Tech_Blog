const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const { withAuth, hasAuth } = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
    try {
    //   const postData = await Post.findAll({
    //     where: {
    //       poster_id: 3
    //     },
    //     attributes: [
    //       'id',
    //       'title',
    //       'post_text',
    //       'post_date',
    //       'poster_id'
    //     ],
    //     include: [
    //       {
    //         model: User,
    //         attributes: ['name']
    //       },
    //       {
    //         model: Comment,
    //         attributes: ['id', 'post_id', 'comment_text', 'commenter_id', 'comment_date'],
    //         include: [
    //           {
    //             model: User,
    //             attributes: ['name']
    //           }
    //         ]
    //       }
    //     ]
    //   });
  
    //   const commentData = await Comment.findAll({
    //     where: {
    //       commenter_id: 3
    //     },
    //     attributes: [
    //       'id',
    //       'comment_text',
    //       'comment_date',
    //       'commenter_id',
    //       'post_id'
    //     ],
    //     include: [
    //       {
    //         model: User,
    //         attributes: ['name']
    //       },
    //       {
    //         model: Post,
    //         attributes: ['id', 'title', 'post_text', 'post_date', 'poster_id'],
    //         include: [
    //           {
    //             model: User,
    //             attributes: ['name']
    //           }
    //         ]
    //       }
    //     ]
    //   });
  
    //   let viewTitle = {
    //     posts: 'View Your Posts',
    //     comments: 'View Your Comments'
    //   }
  
    //   const posts = postData.map((project) => project.get({ plain: true }));
    //   const comments = commentData.map((project) => project.get({ plain: true }));
  
  
  
    //   res.render('dashboard', {
    //     viewTitle,
    //     posts,
    //     comments,
    //     logged_In: req.session.loggedIn,
    //   }
    //   );
      res.status(200).json();
    } catch (err) {
      res.status(500).json(err);
    }
  });


  module.exports = router;