const router = require('express').Router();
const { Comment } = require('../../models');
const { withAuth } = require('../../utils/auth');

//  Create Comment to specific Post
router.post('/', withAuth, async (req, res) => {
    try {
      const addComment = await Comment.create({
        comment_text: req.body.comment_text,
        commenter_id: req.session.curr_id,
        post_id: req.body.post_id
      });
      res.status(200).json(addComment);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//  Update Comment by its id
  router.put('/:id', withAuth, async (req, res) => {
    try {
      const editComment = await Comment.update(req.body, {
        comment_text: req.body.comment_text,
        where: {
          id: req.params.id,
        },
      });
  
      if(!editComment){
        res.status(404).json({ message: "Comment Not Found"}).end();
      }
      res.status(200).json(editComment);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//  Delete Comment by its id
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const remove = Comment.destroy({
        where: {
          id: req.params.id,
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