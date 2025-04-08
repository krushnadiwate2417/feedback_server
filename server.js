const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path : "./config.env"});


mongoose.connect(process.env.MONGODB_STR)
.then(()=>{console.log('DataBase Connected')})
.catch((err)=>{console.log(err)});


app.listen(3000,()=>{
    console.log("Server Started at 3000");
})