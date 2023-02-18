const router = require('express').Router();
const { Post } = require('../../models');


//Had seed ids all off start again manana..
// router.get('/dashboard', withAuth, async (req, res) => {  
//     try {
//       console.log('DASHBOARD', req.session.curr_id);
  
//       const postData = await Post.findAll({
//         attributes: [
//           'id',
//           'title',
//           'post_text',
//           'post_date',
//           'poster_id'
//         ],
//         include: [
//           {
//             model: User,
//             attributes: ['name']
//           },
//           {
//             model: Comment,
//             attributes: ['id', 'post_id', 'comment_text', 'commenter_id', 'comment_date'],
//             include: [
//               {
//                 model: User,
//                 attributes: ['name']
//               }
//             ]
//           }
//         ]
//       });
  
//       let viewTitle = {
//         posts: 'View Your Posts',
//         comments: 'View Your Comments'
//       }
  
//       const posts = postData.map((project) => project.get({ plain: true }));
  
//       res.send({
//         viewTitle,
//         posts,
//         logged_In: req.session.loggedIn,
//       }
//       );
//       // res.status(200).json(posts);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });


module.exports = router;