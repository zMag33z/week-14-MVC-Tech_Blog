const router = require('express').Router();
const { Comment } = require('../../models');


router.post('/', async (req, res) => {
    try {
      const addComment = await Comment.create({

      });
      res.json(addComment);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.get('/:id', async (req, res) => {
    try {
      const onePost = await Comment.findOne(req.body, {
        where: {
          commenter_id: req.params.id,
        },
      });
      res.json(onePost);
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;