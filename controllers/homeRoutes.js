const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');
const hasAuth = require('../utils/auth')


// 
router.get('/', async (req, res) => {
  console.log('HOMEPAGE', req.session.loggedIn);
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
      logged_In: req.session.loggedIn,
    }
    );
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
if(!req.session.loggedIn){

  let formTitle = {
    title: 'Login'
  }

  res.render('login', { formTitle });

}else{
  res.redirect('/');
}
});


router.get('/signup', (req, res) => {
  let formTitle = {
    title: 'Signup'
  }
  res.render('signup',{ formTitle });
})

router.get('/dashboard', withAuth, (req, res) => {
  console.log('DASHBOARD', req.session.loggedIn);
  // let formTitle = {
  //   title: 'Signup'
  // }
  res.render('dashboard');
})

module.exports = router;