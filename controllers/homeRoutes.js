const router = require('express').Router();
const { User, Post, Comment } = require('../models');


// 
router.get('/', async (req, res) => {
  try {

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
          attributes: ['name']
        },
        {
          model: Comment,
          attributes: ['id', 'post_id', 'comment_text', 'commenter_id'],
          include: [
            {
              model: User,
              attributes: ['name']
            }
          ]
        }
      ]
    });

    const posts = postData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    }
    );
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  let formTitle = {
    title: 'Login'
  }
  res.render('login', { formTitle });
});


router.get('/signup', (req, res) => {
  let formTitle = {
    title: 'Signup'
  }
  res.render('signup',{ formTitle });
})

module.exports = router;