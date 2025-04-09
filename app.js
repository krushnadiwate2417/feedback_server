const express = require('express');
const routes = require('./src/routes/feedbackRoute');
const cors = require('cors');

const app = express();

const allowedOrigins = ['http://localhost:5173', 'https://feedbackcolector.netlify.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use('/api/v1',routes)
app.use('/api/v2',routes)
app.use('/',(req,res,next)=>{
    res.send({
        status : "success",
        error : false
    })
    next();
})

module.exports = app;