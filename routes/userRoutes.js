const express = require('express');
const userRouter = express.Router();
const { getUserProfile } = require('../controller/userController');

userRouter.post('/profile',getUserProfile )

module.exports = userRouter;