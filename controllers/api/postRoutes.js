const router = require('express').Router();
const { Post } = require('../../models');


router.post('/', async (req, res) => {
    try {
      const addPost = await Post.create({
        title: req.body.title,
        post_text: req.body.text,
        poster_id: req.session.curr_id
      });
      res.json(addPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.get('/:id', async (req, res) => {
    try {
      const onePost = await Post.findOne(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.json(onePost);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.put('/:id', async (req, res) => {
    try {
      const change = await Post.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
  
      if(!change){
        res.status(404).json({ message: "Post Not Found" }).end();
      }
      res.status(200).json(change);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.delete('/:id', async (req, res) => {
    try {
      const remove = Post.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if(!remove){
        res.status(404).json({ message: "Post Not Found!"}).end();
      }
      res.status(200).json(remove);      
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;