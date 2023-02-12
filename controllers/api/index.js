const api = require('express').Router();
const userRoutes = require('../api/userRoutes');
const postRoutes = require('../api/postRoutes');
const commentRoutes = require('../api/commentRoutes');
const withAuth = require('../../utils/auth');


api.use('/users', userRoutes);

// api.use('/comment', withAuth, commentRoutes);

// api.use('/post',withAuth, postRoutes);


module.exports = api;