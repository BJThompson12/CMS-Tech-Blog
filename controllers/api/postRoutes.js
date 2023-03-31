/*
post and create
delete and destroy
put and update 
*/

const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

module.exports = router;