const express = require('express');

const authRouter = require('./auth.routes');
const userRouter = require('./user.routes');
const authMiddleware = require('../middlewares/auth.middleware');
const categoryRouter = require('./category.routes');
const blogPostRouter = require('./blogPost.routes');

const routers = express.Router();

// public route
routers.use('/login', authRouter);

// semi public route
routers.use('/user', userRouter);

// private routes

routers.use('/categories', authMiddleware.validateToken, categoryRouter);

routers.use('/post', authMiddleware.validateToken, blogPostRouter);

module.exports = routers;
