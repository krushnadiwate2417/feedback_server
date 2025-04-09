const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path : "./config.env"});


exports.fdDb = mongoose.createConnection(process.env.MONGODB_STR,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
})
exports.carsDb = mongoose.createConnection(process.env.MONGODB_STR_CARS,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
})


app.listen(3000,()=>{
    console.log("Server Started at 3000");
})