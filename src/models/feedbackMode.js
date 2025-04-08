const mongoose = require('mongoose');

const feedback = mongoose.Schema({
    fullName : {
        type : String,
        required : [true,"Full Name is Required"],
        trim : true
    },
    email : {
        type : String,
        required : [true,"Email is Required"],
        trim : true
    },
    feedBackMsg : {
        type : String,
        required : [true,"FeedBack is Required"],
        trim : true
    },
    dateTime : {
        type : Date,
        required : [true,"Date is Required"]
    }
})

const UserFeedBack = mongoose.model('feedback',feedback);
module.exports = UserFeedBack;