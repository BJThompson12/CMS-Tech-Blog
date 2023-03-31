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
    const postData = await Post.findAll({
      include: [{model:Post}, {model:User}, {model:Comment}]
    });
    res.status(200).json(postData)
    console.log('Find all SUCCESS');
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;