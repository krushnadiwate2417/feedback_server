const express = require('express');
const routes = require('./src/routes/feedbackRoute');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'https://feedbackcolector.netlify.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true 
  }));

app.use(express.json());
app.use('/api/v1',routes)
app.use('/',(req,res,next)=>{
    res.send({
        status : "success",
        error : false
    })
    next();
})

module.exports = app;