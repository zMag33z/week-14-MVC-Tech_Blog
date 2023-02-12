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

    //  checking with insomnia
    // res.status(200).json(posts);
    res.render('homepage', {

      posts,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    }
    );
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});



router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;