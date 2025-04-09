const express = require('express');
const userController = require('../controllers/feedbackController');
const carsController = require('./../controllers/carController');

const userRouter = express.Router();

userRouter.route('/submit-feedback').post(userController.submitFeedback);
userRouter.route('/feedbacks').get(userController.getFeedbacks);

userRouter.route('/cars').get(carsController.getCars);

module.exports = userRouter;