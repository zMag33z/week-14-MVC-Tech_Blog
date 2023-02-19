const router = require('express').Router();
const { Post } = require('../../models');


router.post('/', async (req, res) => {
    try {
      const addPost = await Post.create({
        // ADD CODE
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
      const [affectedRows] = await Post.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
  
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.delete('/:id', async (req, res) => {
    try {
      const [affectedRows] = Post.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;