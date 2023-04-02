/*
authenticate
dashboards routes should be mirrored like main layouts
3 gets - find all of them, new post, edit post

home 
gets - get all, single and auth (login and signup)

res.render to display the code 
*/

const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// get all posts
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: Comment,
          include: {model: User, attributes: ['username']}
        },
      ],
    });
    res.status(200).json(postData);
    console.log('Find All SUCCESS');
    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    // res.render('homepage', { 
    //   projects, 
    //   logged_in: req.session.logged_in 
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});
// find one post by ID
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  try {
    const postData = await Post.findByPk(req.params.id,{
    // be sure to include its associated Category and Tag
       include: [
        {
           model: Comment,
      include: {model: User, attributes: ['username']}
    },
  ],
    });
    res.status(200).json(postData);
    console.log('Find single post SUCCESS');
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;