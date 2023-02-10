const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', async (req, res) => {
  try {
console.log('were in');

    // const postData = await User.findAll({
    //   attributes: [
    //     'id',
    //     'title',
    //     'post_text',
    //     'post_date',
    //     'poster_id'
    //   ]
    // });

    // const posts = postData.map((project) => project.get({ plain: true }));

    // res.render('homepage', {
    //   posts,
    //   // Pass the logged in flag to the template
    //   logged_in: req.session.logged_in,
    // });
  } catch (err) {
    res.status(500).json(err);
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