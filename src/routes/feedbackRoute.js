const express = require('express');
const userController = require('../controllers/feedbackController');

const userRouter = express.Router();

userRouter.route('/submit-feedback').post(userController.submitFeedback);
userRouter.route('/feedbacks').get(userController.getFeedbacks);

module.exports = userRouter;