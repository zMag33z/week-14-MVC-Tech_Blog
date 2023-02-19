const api = require('express').Router();
const userRoutes = require('../api/userRoutes');
const postRoutes = require('../api/postRoutes');
const commentRoutes = require('../api/commentRoutes');
const { withAuth } = require('../../utils/auth');


api.use('/users', userRoutes);

api.use('/comment', commentRoutes);

api.use('/post', postRoutes);


module.exports = api;