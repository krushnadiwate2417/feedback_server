const UserFeedBack = require('../models/feedbackMode');


exports.submitFeedback = async (req,res,next) =>{
    try {
        const feedbackObj = await UserFeedBack.create(req.body);
        await feedbackObj.save();
        res.status(201).json({
            status : "success",
            data : feedbackObj
        })
    } catch (error) {
        res.status(400).json({
            status : "fail",
            message : error.message
        })
    }
}

exports.getFeedbacks = async (req,res,next)=>{
    try {
        const feedbacks = await UserFeedBack.find();
        res.status(200).json({
            status : "success",
            data : feedbacks
        })

    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
    }
}