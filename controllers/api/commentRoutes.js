const router = require('express').Router();
const { Comment } = require('../../models');


router.post('/', async (req, res) => {
    try {
      const addComment = await Comment.create({
        comment_text: req.body.comment_text,
        commenter_id: req.session.curr_id,
        post_id: req.body.post_id
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


  router.put('/:id', async (req, res) => {
    try {
      const change = await Comment.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
  
      if(!change){
        res.status(404).json({ message: "Comment Not Found"}).end();
      }
      res.status(200).json(change);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.delete('/:id', async (req, res) => {
    try {
      const remove = Comment.destroy({
        where: {
          commenter_id: req.session.curr_id,
          post_id: req.params.id,
        },
      });

      if(!remove){
        res.status(404).json({ message: "Comment Not Found!" }).end();
      }
      res.status(200).json(remove);      
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;