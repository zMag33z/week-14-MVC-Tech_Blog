const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', async (req, res) => {
  try {
console.log('were in');

    const postData = await Post.findAll({
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
          attributes: ['id', 'name']
        },
        {
          model: Comment,
          attributes: ['id', 'post_id', 'comment_text', 'commenter_id']
        }
      ]
    });

    const posts = postData.map((project) => project.get({ plain: true }));



    res.render('homepage', //{

    //   posts,
    //   // Pass the logged in flag to the template
    //   logged_in: req.session.logged_in,
    // }
    );
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;