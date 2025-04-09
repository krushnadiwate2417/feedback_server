const Car = require("../models/carsModel");

exports.getCars = async (req,res,next)=>{
    try {
        const cars = await Car.find();
        res.status(200).json({
            status : 'success',
            data : cars
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : 'cannot Find'
        })
    }
}