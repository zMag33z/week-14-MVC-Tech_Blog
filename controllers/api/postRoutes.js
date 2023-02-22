const router = require('express').Router();
const { Post } = require('../../models');

//  Create Post by current User
router.post('/', async (req, res) => {
  try {
    const addPost = await Post.create({
      title: req.body.title,
      post_text: req.body.post_text,
      poster_id: req.session.curr_id
    });
    res.json(addPost);
  } catch (err) {
    res.status(500).json(err);
  }
  });

//  Update Post by its id
router.put('/:id', async (req, res) => {
  try {
    const editPost = await Post.update(req.body, {
      title: req.body.title,
      post_text: req.body.post_text,
      where: {
        id: req.params.id,
      },
    });
  
    if(!editPost){
      res.status(404).json({ message: "Post Not Found" }).end();
    }
    res.status(200).json(editPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//  Delete Post by its id
router.delete('/:id', async (req, res) => {
  try {
    console.log('HELLO delete', req.body, req.params.id);
    // const remove = Post.destroy({
    //   where: {
    //     id: req.params.id,
    //   },
    // });
  
    // if(!remove){
    //   res.status(404).json({ message: "Post Not Found!"}).end();
    // }
    // res.status(200).json(remove);      
  } catch (err) {
    // res.status(500).json(err);
  }
});


module.exports = router;